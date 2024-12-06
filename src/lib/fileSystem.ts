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
      name: 'grade11',
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
      name: 'grade12',
      subjects: [
        {
          name: 'physics',
          chapters: [
            { name: 'chapter2', subChapters: ['2_1', '2_2'] },
            { name: 'Chapter Two', subChapters: ['Newtown Abate', 'Inheritance'] },
          ],
        },
        {
          name: 'chemistry',
          chapters: [
            { name: 'atomic-structure', subChapters: ['Electrons', 'Isotopes'] },
            { name: 'chemical-bonding', subChapters: ['Ionic Bonds', 'Covalent Bonds'] },
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
  
  