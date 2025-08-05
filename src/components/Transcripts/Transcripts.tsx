import React from "react";
import classes from "./Transcripts.scss";

const Transcripts = () => {
  return (
    <div className={classes.container}>
      {/* Header Section */}
      <div className={classes.header}>
        <div className={classes.schoolInfo}>
          <div className={classes.schoolLogo}>
            <div className={classes.logoPlaceholder}>AIS</div>
          </div>
          <div className={classes.schoolDetails}>
            <h1>Ahmedabad International School</h1>
            <p>Maplewood Academy, 45 Oak Lane,</p>
            <p>Springfield, IL 62704</p>
            <p>+1-234-5131123, contact@ais.edu.in</p>
            <p>Code: BJIOA222</p>
          </div>
        </div>
        <div className={classes.titleSection}>
          <h2>Transcript title</h2>
          <p>
            <strong>Issue date:</strong>
          </p>
        </div>
        <div className={classes.credentialsLogos}>
          <div className={classes.ibLogo}>IB</div>
          <div className={classes.curriculumLogo}>📚</div>
        </div>
      </div>

      {/* Student Information Section */}
      <div className={classes.studentInfo}>
        <div className={classes.studentRow}>
          <div className={classes.infoGroup}>
            <label>Student Name</label>
            <div className={classes.infoField}></div>
          </div>
          <div className={classes.infoGroup}>
            <label>Student UID</label>
            <div className={classes.infoField}></div>
          </div>
        </div>
        <div className={classes.studentRow}>
          <div className={classes.infoGroup}>
            <label>Gender</label>
            <div className={classes.infoField}></div>
          </div>
          <div className={classes.infoGroup}>
            <label>Year of graduation</label>
            <div className={classes.infoField}></div>
          </div>
        </div>
        <div className={classes.studentRow}>
          <div className={classes.infoGroup}>
            <label>Year of withdrawal</label>
            <div className={classes.infoField}></div>
          </div>
          <div className={classes.infoGroup}>
            <label>Parents</label>
            <div className={classes.infoField}></div>
          </div>
        </div>
      </div>

      {/* Grades Section */}
      <div className={classes.gradesContainer}>
        {/* First Row of Grade Tables */}
        <div className={classes.gradesRow}>
          <div className={classes.gradeTableContainer}>
            <div className={classes.gradeHeader}>
              <span>Grade - Programme, Year</span>
              <span className={classes.gradeLevel}>S1</span>
            </div>
            <table className={classes.gradeTable}>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Score</th>
                  <th>Credit</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, i) => (
                  <tr key={i}>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={classes.gradeFooter}>
              <div className={classes.totalRow}>
                <span>Total</span>
              </div>
              <div className={classes.gpaRow}>
                <span>GPA</span>
              </div>
              <div className={classes.cgpaCredits}>
                <span>CGPA</span>
                <span>Total credits</span>
              </div>
            </div>
          </div>

          <div className={classes.gradeTableContainer}>
            <div className={classes.gradeHeader}>
              <span>Grade - Programme, Year</span>
              <span className={classes.gradeLevel}>S1</span>
            </div>
            <table className={classes.gradeTable}>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Score</th>
                  <th>Credit</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, i) => (
                  <tr key={i}>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={classes.gradeFooter}>
              <div className={classes.totalRow}>
                <span>Total</span>
              </div>
              <div className={classes.gpaRow}>
                <span>GPA</span>
              </div>
              <div className={classes.cgpaCredits}>
                <span>CGPA</span>
                <span>Total credits</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row of Grade Tables */}
        <div className={classes.gradesRow}>
          <div className={classes.gradeTableContainer}>
            <div className={classes.gradeHeader}>
              <span>Grade - Programme, Year</span>
              <span className={classes.gradeLevel}>S1</span>
            </div>
            <table className={classes.gradeTable}>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Score</th>
                  <th>Credit</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, i) => (
                  <tr key={i}>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={classes.gradeFooter}>
              <div className={classes.totalRow}>
                <span>Total</span>
              </div>
              <div className={classes.gpaRow}>
                <span>GPA</span>
              </div>
              <div className={classes.cgpaCredits}>
                <span>CGPA</span>
                <span>Total credits</span>
              </div>
            </div>
          </div>

          <div className={classes.gradeTableContainer}>
            <div className={classes.gradeHeader}>
              <span>Grade - Programme, Year</span>
              <span className={classes.gradeLevel}>S1</span>
            </div>
            <table className={classes.gradeTable}>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Score</th>
                  <th>Credit</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, i) => (
                  <tr key={i}>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={classes.gradeFooter}>
              <div className={classes.totalRow}>
                <span>Total</span>
              </div>
              <div className={classes.gpaRow}>
                <span>GPA</span>
              </div>
              <div className={classes.cgpaCredits}>
                <span>CGPA</span>
                <span>Total credits</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className={classes.additionalInfo}>
        <h3>Academic Achievements & Notes</h3>
        <ul className={classes.achievementsList}>
          <li>Dean's List for Academic Excellence (Spring 2023)</li>
          <li>Outstanding Performance in Mathematics and Sciences</li>
        </ul>
      </div>
    </div>
  );
};

export default Transcripts;
