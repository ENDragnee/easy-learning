export interface Chapter {
    name: string;
    subChapters: string[];
  }
  
  interface Subject {
    name: string;
    chapters: Chapter[];
  }
  
  interface Grade {
    name: string;
    subjects: Subject[];
  }
  
  const mockFileSystem: Grade[] = [
    {
      name: '11',
      subjects: [
        {
          name: 'math',
          chapters: [
            { name: 'algebra', subChapters: ['Linear Equations', 'Quadratic Equations'] },
            { name: 'geometry', subChapters: ['Triangles', 'Circles'] },
          ],
        },
        {
          name: 'physics',
          chapters: [
            { name: 'mechanics', subChapters: ['Newton\'s Laws', 'Energy'] },
            { name: 'thermodynamics', subChapters: ['Heat', 'Entropy'] },
          ],
        },
      ],
    },
    {
      name: '12',
      subjects: [
        {
          name: 'physics',
          chapters: [
            { name: '1', subChapters: ['1_1', '1_2', '1_3', '1_4', '1_5'] },
            { name: '2', subChapters: ['2.1 Projectile Motion', '2.2 Rotational Motion', '2.3 Rotational Dynamics', '2.4 Planetary Motion and Kepler\’s Laws', '2.5 Newton\’s Law of Universal Gravitation'] },
            { name: '3', subChapters: ['3.1 Properties of Solids, Liquids, and Gases', '3.2 Pressure in Fluids at Rest', '3.3 Archimedes\' Principle', '3.4 Fluid Flow', '3.5 High Pressure Systems'] },
            { name: '4', subChapters: ['4.1 Introduction', '4.2 Magnetic Field Lines', '4.3 Current and Magnetism', '4.4 Electromagnetic Induction', '4.5 Faraday\’s Law of Electromagnetic Induction', '4.6 Transformers', '4.7 Application and Safety'] },
            { name: '5', subChapters: ['5.1 Conductors, Insulators, and Semiconductors', '5.2 Diodes and their Functions', '5.3 Rectification', '5.4 Transistors and Their Application', '5.5 Integrated Circuits', '5.6 Logic Gates and Logic Circuits', '5.7 Applications of Electronics'] },
          ],
        },
        {
          name: 'chemistry',
          chapters: [
            { name: '1', subChapters: ['1.1 Acid-Base Concepts', '1.2 Ionic Equilibria of Weak Acids and Bases', '1.3 Common-Ion Effect and Buffer Solutions', '1.4 Hydrolysis of Salts', '1.5 Acid–Base Indicators and Titrations'] },
            { name: '2', subChapters: ['2.1 Oxidation-Reduction Reactions', '2.2 Electrolysis of Aqueous Solutions', '2.3 Quantitative Aspects of Electrolysis', '2.4 Industrial Application of Electrolysis', '2.5 Voltaic Cells'] },
            { name: '3', subChapters: ['3.1 Introduction', '3.2 Natural Resources and Industry', '3.3 Manufacturing of Valuable Products\' Chemicals', '3.4 Some Manufacturing Industries in Ethiopia'] },
            { name: '4', subChapters: ['4.1 Introduction to Polymers', '4.2 Polymerization Reactions', '4.3 Classification of Polymers'] },
            { name: '5', subChapters: ['5_1', '5_2', '5_3', '5_4'] },
          ],
        },
      ],
    },
  ];
  
  export function getGrades(): string[] {
    return mockFileSystem.map(grade => grade.name);
  }
  
  export function getSubjects(grade: string): string[] {
    const gradeData = mockFileSystem.find(g => g.name === grade);
    return gradeData ? gradeData.subjects.map(subject => subject.name) : [];
  }
  
  export function getFolderStructure(grade: string, course: string): Chapter[] {
    const gradeData = mockFileSystem.find(g => g.name === grade);
    if (!gradeData) return [];
  
    const subjectData = gradeData.subjects.find(s => s.name === course);
    return subjectData ? subjectData.chapters : [];
  }
  
  