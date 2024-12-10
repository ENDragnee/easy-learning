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
            { name: 'chapter1', subChapters: ['1_1', '1_2', '1_3', '1_4', '1_5'] },
            { name: 'chapter2', subChapters: ['2_1', '2_2', '2_3', '2_4', '2_5'] },
            { name: 'chapter3', subChapters: ['3_1', '3_2', '3_3', '3_4', '3_5'] },
            { name: 'chapter4', subChapters: ['4_1', '4_2', '4_3', '4_4', '4_5', '4_6', '4_7'] },
            { name: 'chapter5', subChapters: ['5_1', '5_2', '5_3', '5_4', '5_5', '5_6', '5_7'] },
          ],
        },
        {
          name: 'chemistry',
          chapters: [
            { name: 'chapter1', subChapters: ['1_1', '1_2', '1_3', '1_4', '1_5'] },
            { name: 'chapter2', subChapters: ['2_1', '2_2', '2_3', '2_4', '2_5'] },
            { name: 'chapter3', subChapters: ['3_1', '3_2', '3_3', '3_4'] },
            { name: 'chapter4', subChapters: ['4_1', '4_2', '4_3'] },
            { name: 'chapter5', subChapters: ['5_1', '5_2', '5_3', '5_4'] },
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
  
  