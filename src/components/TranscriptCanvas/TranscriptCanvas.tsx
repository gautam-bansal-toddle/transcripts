import React, {
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import html2canvas from "html2canvas";
import Transcripts from "../Transcripts/Transcripts";

interface TranscriptCanvasProps {
  width?: number;
  height?: number;
  scale?: number;
  backgroundColor?: string;
  onImageGenerated?: (dataUrl: string) => void;
  onError?: (error: Error) => void;
  autoGenerate?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface TranscriptCanvasRef {
  generateImage: () => Promise<string | null>;
}

const TranscriptCanvas = forwardRef<TranscriptCanvasRef, TranscriptCanvasProps>(
  (
    {
      width = 900,
      height = 1200,
      scale = 2,
      backgroundColor = "#ffffff",
      onImageGenerated,
      onError,
      autoGenerate = true,
      className,
      style,
    },
    ref
  ) => {
    const transcriptRef = useRef<HTMLDivElement>(null);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const generateImage = useCallback(async () => {
      if (!transcriptRef.current) {
        const error = new Error("Transcript reference not found");
        onError?.(error);
        return null;
      }

      setIsGenerating(true);

      try {
        const canvas = await html2canvas(transcriptRef.current, {
          width,
          height,
          scale,
          backgroundColor,
          useCORS: true,
          allowTaint: false,
          logging: false,
          removeContainer: true,
          imageTimeout: 15000,
          onclone: (clonedDoc) => {
            // Ensure all styles are properly applied to the cloned document
            const clonedElement = clonedDoc.querySelector(
              "[data-transcript-container]"
            );
            if (clonedElement) {
              (clonedElement as HTMLElement).style.transform = "none";
              (clonedElement as HTMLElement).style.position = "static";
            }
          },
        });

        const dataUrl = canvas.toDataURL("image/png", 1.0);
        setGeneratedImage(dataUrl);
        onImageGenerated?.(dataUrl);
        return dataUrl;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error generating image:", error);
        onError?.(error as Error);
        return null;
      } finally {
        setIsGenerating(false);
      }
    }, [width, height, scale, backgroundColor, onImageGenerated, onError]);

    // Auto-generate image when component mounts or dependencies change
    useEffect(() => {
      if (autoGenerate && transcriptRef.current) {
        // Small delay to ensure DOM is fully rendered
        const timer = setTimeout(() => {
          generateImage();
        }, 100);
        return () => clearTimeout(timer);
      }
    }, [autoGenerate, generateImage]);

    // Expose generateImage function via ref
    useImperativeHandle(ref, () => ({
      generateImage,
    }));

    return (
      <>
        {/* Hidden Transcripts component for image generation */}
        <div
          ref={transcriptRef}
          data-transcript-container
          style={{
            position: "absolute",
            left: "-9999px",
            top: "-9999px",
            width: `${width}px`,
            minHeight: `${height}px`,
            backgroundColor,
            pointerEvents: "none",
          }}
        >
          <Transcripts />
        </div>

        {/* Rendered image display */}
        <div
          className={className}
          style={{
            minHeight: `100vh`,
            backgroundColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            ...style,
          }}
        >
          {isGenerating ? (
            <div style={{ textAlign: "center", color: "#666" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  border: "3px solid #f3f3f3",
                  borderTop: "3px solid #3498db",
                  borderRadius: "50%",
                  margin: "0 auto 10px",
                  animation: "spin 1s linear infinite",
                }}
              />
              <p>Generating transcript image...</p>
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          ) : generatedImage ? (
            <img
              src={generatedImage}
              alt="Generated transcript"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          ) : (
            <div style={{ textAlign: "center", color: "#999" }}>
              <p>No image generated yet</p>
            </div>
          )}
        </div>
      </>
    );
  }
);

TranscriptCanvas.displayName = "TranscriptCanvas";

export default TranscriptCanvas;
