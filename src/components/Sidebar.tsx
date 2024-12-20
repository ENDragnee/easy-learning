'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Search, Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { ThemeToggle } from '@/components/theme-toggle';
import { useEducationData } from '@/app/hooks/useEducationData';
import Link from 'next/link';
import { SidebarProps } from '@/types/types';

import {
  getGrades,
  getSubjects,
  getFolderStructure,
  Chapter,
} from '@/lib/fileSystem';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useSidebar } from '@/app/hooks/SidebarContext';
import { useState } from 'react';

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [isGradesOpen, setIsGradesOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isThemeReady, setIsThemeReady] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const userMenuRef = React.useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);
  const [isChaptersOpen, setIsChaptersOpen] = useState(false); // Added state for chapters
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  //const {state, dispatch} = useSidebar();
  const {
    grade,
    course,
    chapter,
    subchapter,
    loading,
    error,
    setGrade,
    setCourse,
    setChapter,
    setSubchapter,
    fetchSubchapters,
    preloadNextData,
  } = useEducationData();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Handle sidebar close
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }

      // Handle user menu close
      if (
        isUserMenuOpen &&
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isUserMenuOpen, setIsOpen]);

  // Ensure the theme is fully initialized before rendering
  useEffect(() => {
    if (resolvedTheme) {
      setIsThemeReady(true);
    }
  }, [resolvedTheme]);

  useEffect(() => {
    if (grade && course && chapter) {
      fetchSubchapters(grade, course, chapter);
    }
  }, [grade, course, chapter, fetchSubchapters]);

  const grades = getGrades();
  const subjects = grade ? getSubjects(grade) : [];
  const chapters = grade && course ? getFolderStructure(grade, course) : [];

  const filteredSubjects = subjects.filter((subject) =>
    subject.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const filteredChapters = chapters.filter(
    (chapter) =>
      chapter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.subChapters.some((subChapter) =>
        subChapter.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  if (!isThemeReady) {
    return null;
  }

  const handleGradeSelect = (grade: string) => {
    setGrade(grade);
    setIsGradesOpen(false); // Close grades when a grade is selected
    setIsSubjectsOpen(true); // Open subjects when a grade is selected
  };

  const handleSubjectSelect = (subject: string) => {
    setCourse(subject);
    setIsSubjectsOpen(false); // Close subjects when a subject is selected
    setIsChaptersOpen(true); // Open chapters when a subject is selected
  };
  const handleChapterSelect = (chapterName: string) => {
    // Hide the previous chapter when a new one is selected
    if (selectedChapter === chapterName) {
        setIsChaptersOpen(false); // Close if already open
        setSelectedChapter(null);  // Deselect if clicked again
    } else {
        setSelectedChapter(chapterName); // Set new selected chapter
        setIsChaptersOpen(true); // Open chapters if a new one is selected
    }
};
  return (
    <div
      ref={sidebarRef}
      className={cn(
        'fixed top-0 left-0 h-screen transition-all duration-300 ease-in-out pt-5 z-40 flex flex-col',
        isOpen
          ? theme === 'dark'
            ? 'w-64 bg-[#383c4a] text-[#7c818c]'
            : 'w-64 bg-gray-200 text-black'
          : theme === 'dark'
          ? 'w-12 text-[#7c818c]'
          : 'w-12 text-black',
      )}
    >
      <>
        <div className="flex items-center justify-between p-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'text-[#7c818c] hover:rounded-md hover:bg-slate-300 dark:text-white dark:hover:bg-slate-500',
              !isOpen && 'rounded-full',
            )}
          >
            <Menu className="w-6 h-6" />
          </Button>
          {isOpen && (
            <div className="flex-1 ml-2">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={cn(
                    'w-full bg-[#404552] border-none rounded-full pl-8',
                    theme === 'dark'
                      ? 'text-black placeholder-slate-300 bg-gray-200'
                      : 'text-black placeholder-gray-200 bg-gray-300',
                  )}
                />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4" />
              </div>
            </div>
          )}
        </div>
        {isOpen && (
          <ScrollArea className="h-screen">
            <div className="p-2">
              <Collapsible open={isGradesOpen} onOpenChange={setIsGradesOpen}>
                <CollapsibleTrigger className="flex items-center w-full text-left my-1.5 py-1 px-2 rounded">
                  <ChevronRight
                    className={cn(
                      'w-4 h-4 mr-1 transition-transform',
                      isGradesOpen && 'transform rotate-90',
                    )}
                  />
                  Grades
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <GradeSelector
                    grades={grades}
                    selectedGrade={grade}
                    onSelectGrade={handleGradeSelect}
                  />
                </CollapsibleContent>
              </Collapsible>
              <AnimatePresence>
                {grade && (
                  <motion.div
                    key="subjects"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <SubjectList
                      subjects={filteredSubjects}
                      selectedSubject={course}
                      onSelectSubject={handleSubjectSelect}
                      isSubjectsOpen={isSubjectsOpen}
                      setIsSubjectsOpen={setIsSubjectsOpen}
                    />
                  </motion.div>
                )}
                {course && (
                  <motion.div
                    key="chapters"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <ChapterList
                      chapters={filteredChapters}
                      selectedGrade={grade}
                      selectedCourse={course}
                      isChaptersOpen={isChaptersOpen}
                      setIsChaptersOpen={setIsChaptersOpen}
                      onSelectChapter={handleChapterSelect}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollArea>
        )}
      </>
      <>
        {isOpen ? (
          <Button
            variant="ghost"
            className="flex items-center justify-start px-4 py-2 w-full hover:bg-[#4b5162] hover:text-white"
            onClick={() => router.push('/flashcard')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
            Flash Cards
          </Button>
        ) : (
          ''
        )}
      </>
      <div className="mt-auto mb-4 p-2">
        {session?.user?.name && (
          <div className="relative" ref={userMenuRef}>
            <div className="flex">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className={cn(
                  'flex items-center w-full',
                  isOpen ? 'justify-start px-2' : 'md:justify-center hidden',
                )}
              >
                <div
                  className={cn(
                    'w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold',
                    !isOpen && 'w-6 h-6 text-sm',
                  )}
                >
                  {session.user.name.charAt(0).toUpperCase()}
                </div>
                {isOpen && (
                  <span className="ml-2 text-sm font-medium">
                    {session.user.name}
                  </span>
                )}
              </button>
              {isOpen && <ThemeToggle />}
            </div>
            {isUserMenuOpen && isOpen && (
              <div
                className={cn(
                  'absolute bottom-full left-0 mb-2 w-48 rounded-md shadow-lg',
                  theme === 'dark' ? 'bg-[#404552]' : 'bg-white',
                )}
              >
                <div className="py-1">
                  <button
                    onClick={() => router.push('/progress')}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-[#4b5162] hover:text-white rounded-md p-4"
                  >
                    Progress
                  </button>
                  <button
                    onClick={() => {
                      /* Add settings logic */
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-[#4b5162] hover:text-white"
                  >
                    Settings
                  </button>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-[#4b5162] hover:text-white"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const GradeSelector: React.FC<{
  grades: string[];
  selectedGrade: string | null;
  onSelectGrade: (grade: string) => void;
}> = ({ grades, selectedGrade, onSelectGrade }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-2 pl-6">
      {grades.map((grade) => (
        <motion.div
          key={grade}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="ghost"
            className={cn(
              'w-8 h-8 rounded-full p-0',
              selectedGrade === grade
                ? 'bg-[#5294e2] text-white'
                : 'bg-gray-300 dark:bg-[#404552] text-[#7c818c] hover:text-white hover:bg-[#4b5162]',
            )}
            onClick={() => onSelectGrade(grade)}
          >
            {grade.replace('grade', '').trim()}
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

const SubjectList: React.FC<{
  subjects: string[];
  selectedSubject: string | null;
  onSelectSubject: (subject: string) => void;
  isSubjectsOpen: boolean;
  setIsSubjectsOpen: (isOpen: boolean) => void;
}> = ({ subjects, selectedSubject, onSelectSubject, isSubjectsOpen, setIsSubjectsOpen }) => {
  return (
    <Collapsible open={isSubjectsOpen} onOpenChange={setIsSubjectsOpen}>
      <CollapsibleTrigger className="flex items-center w-full text-left my-1.5 py-1 px-2 rounded">
        <ChevronRight
          className={cn(
            'w-4 h-4 mr-1 transition-transform',
            isSubjectsOpen && 'transform rotate-90',
          )}
        />
        Subjects
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="ml-4 border-l border-[#7d859a]">
          {subjects.map((subject) => (
            <li key={subject} className="relative">
              <Button
                variant="ghost"
                className={cn(
                  'w-full justify-start rounded-md border-l-2 border-transparent my-0.5',
                  selectedSubject === subject
                    ? 'bg-[#4b5162] text-white font-bold border-l-[#5294e2]'
                    : 'hover:bg-[#4b5162] hover:text-white',
                )}
                onClick={() => onSelectSubject(subject)}
              >
                {subject}
              </Button>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

const ChapterList: React.FC<{
  chapters: Chapter[];
  selectedGrade: string | null;
  selectedCourse: string | null;
  isChaptersOpen: boolean;
  setIsChaptersOpen: (isOpen: boolean) => void;
  onSelectChapter: (chapter: string) => void;
}> = ({ chapters, selectedGrade, selectedCourse, isChaptersOpen, setIsChaptersOpen, onSelectChapter }) => {
  const [openChapters, setOpenChapters] = useState<string[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  const toggleChapter = (chapterName: string) => {
    // If the clicked chapter is already open, close it; otherwise, open the new chapter
    if (selectedChapter === chapterName) {
      setOpenChapters(prev => prev.includes(chapterName) ? prev.filter(name => name !== chapterName) : [...prev, chapterName]);
      setSelectedChapter(null); // Deselect if clicked again
    } else {
      setOpenChapters([chapterName]); // Close any other open chapters and open the new one
      setSelectedChapter(chapterName); // Set the current chapter as selected
    }
  };

  return (
    <Collapsible open={isChaptersOpen} onOpenChange={setIsChaptersOpen}>
      <CollapsibleTrigger className="flex items-start w-full text-left my-1.5 py-1 px-2 rounded">
        <ChevronRight
          className={cn(
            'w-4 h-4 mr-1 transition-transform',
            isChaptersOpen && 'transform rotate-90',
          )}
        />
        Chapters
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="ml-4 border-l border-[#4b5162]">
          {chapters.map((chapter) => (
            <li key={chapter.name}>
              <Collapsible open={openChapters.includes(chapter.name)}>
                <CollapsibleTrigger 
                  className="flex items-start w-full text-left my-0.5 py-1 px-2 hover:bg-[#4b5162] hover:text-white rounded-md"
                  onClick={() => toggleChapter(chapter.name)}
                >
                  <ChevronRight className={cn(
                    'w-4 h-4 mr-1 transition-transform',
                    openChapters.includes(chapter.name) && 'transform rotate-90',
                  )} />
                  {`${chapter.name}`}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="ml-4 border-l border-[#4b5162] items-start flex flex-col">
                    {chapter.subChapters.map((subChapter) => (
                      <li key={subChapter} className="relative items-start">
                        {selectedGrade && selectedCourse && (
                          <Link
                            href={{
                              pathname: `/moe/${selectedGrade}/${selectedCourse}/${chapter.name}/${subChapter}`,
                            }}
                          >
                            <Button
                              variant="ghost"
                              className="w-full text-left rounded-md my-0.5 hover:bg-[#4b5162] hover:text-white"
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent the click from bubbling up to the chapter
                                onSelectChapter(chapter.name); // Call parent function to handle selection
                                setSelectedChapter(chapter.name); // Set currently selected chapter
                              }}
                              title={subChapter}
                            >
                              {subChapter.length > 30
                                ? `${subChapter.substring(0, 30)}...`
                                : subChapter}
                            </Button>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};


export default Sidebar;