"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Search, Menu } from 'lucide-react';
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useSidebar } from "@/app/hooks/SidebarContext";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { useEducationData } from "@/app/hooks/useEducationData";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [isGradesOpen, setIsGradesOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isThemeReady, setIsThemeReady] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { state, dispatch } = useSidebar();
  const {
    course,
    chapter,
    subchapter,
    loading,
    error,
    fetchCourses,
    fetchChapters,
    fetchSubchapters,
    preloadNextData,
  } = useEducationData();

  // Ensure the theme is fully initialized before rendering
  useEffect(() => {
    if (resolvedTheme) {
      setIsThemeReady(true);
    }
  }, [resolvedTheme]);

  const grades = ["9", "10", "11", "12"];

  const filteredCourses = state.courses.filter((course: string) =>
    course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredChapters = state.chapters.filter((chapter: string) =>
    chapter.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSubchapters = state.subchapters.filter((subchapter: string | undefined) => 
    subchapter && subchapter.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log('Filtered subchapters:', filteredSubchapters);

  useEffect(() => {
    const fetchCourses = async () => {
      if (state.selectedGrade) {
        dispatch({ type: "SET_LOADING", payload: true });
        try {
          const response = await fetch(
            `/api/nav/courses?grade=${state.selectedGrade}`
          );
          console.log(response.body);

          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          const data = await response.json();
          dispatch({
            type: "SET_COURSES",
            payload: data.map((item: { Course: string }) => item.Course),
          });
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };
  
    fetchCourses();
  }, [state.selectedGrade, dispatch]);

  useEffect(() => {
    const fetchChapters = async () => {
      if (state.selectedGrade && state.selectedCourse) {
        dispatch({ type: "SET_LOADING", payload: true });
        try {
          const response = await fetch(
            `/api/nav/chapters?grade=${state.selectedGrade}&course=${state.selectedCourse}`
          );
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          const data = await response.json();
          dispatch({
            type: "SET_CHAPTERS",
            payload: data.map((item: { Chapter: string }) => item.Chapter),
          });
        } catch (error) {
          console.error("Error fetching chapters:", error);
        }
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    fetchChapters();
  }, [state.selectedGrade, state.selectedCourse, dispatch]);

  useEffect(() => {
    const fetchSubchapters = async () => {
      if (state.selectedGrade && state.selectedCourse && state.selectedChapter) {
        dispatch({ type: "SET_LOADING", payload: true });
        try {
          const response = await fetch(
            `/api/nav/subchapters?grade=${state.selectedGrade}&course=${state.selectedCourse}&chapter=${state.selectedChapter}`
          );
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          const data = await response.json();
          dispatch({
            type: "SET_SUBCHAPTERS",
            payload: data.map((item: { SubChapter: string }) => item.SubChapter),
          });
        } catch (error) {
          console.error("Error fetching subchapters:", error);
        }
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    fetchSubchapters();
  }, [
    state.selectedGrade,
    state.selectedCourse,
    state.selectedChapter,
    dispatch,
  ]);

  useEffect(() => {
    if (state.selectedGrade) {
      fetchCourses(state.selectedGrade);
    }
  }, [state.selectedGrade, fetchCourses]);

  useEffect(() => {
    if (state.selectedGrade && state.selectedCourse) {
      fetchChapters(state.selectedGrade, state.selectedCourse);
    }
  }, [state.selectedGrade, state.selectedCourse, fetchChapters]);

  useEffect(() => {
    if (state.selectedGrade && state.selectedCourse && state.selectedChapter) {
      fetchSubchapters(state.selectedGrade, state.selectedCourse, state.selectedChapter);
    }
  }, [state.selectedGrade, state.selectedCourse, state.selectedChapter, fetchSubchapters]);


  if (!isThemeReady) {
    return null; // Avoid rendering until the theme is resolved
  }

  return (
    <div
      className={cn(
        "fixed top-0 left-0 h-screen transition-all duration-300 ease-in-out pt-5 flex flex-col",
        isOpen
          ? theme === "dark"
            ? "w-64 bg-[#383c4a] text-[#7c818c]"
            : "w-64 bg-gray-200 text-black"
          : theme === "dark"
          ? "w-12 md:bg-[#383c4a] text-[#7c818c]"
          : "w-12 md:bg-gray-200 text-black"
      )}
    >
      <>
        <div className="flex items-center justify-between p-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "text-[#7c818c] hover:rounded-md hover:bg-slate-300 dark:text-white dark:hover:bg-slate-500",
              !isOpen && "rounded-full"
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
                    "w-full bg-[#404552] border-none rounded-full pl-8",
                    theme === "dark"
                      ? "text-black placeholder-slate-300 bg-gray-200"
                      : "text-black placeholder-gray-200 bg-gray-300"
                  )}
                />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4" />
              </div>
            </div>
          )}
        </div>
        {isOpen && (
          <ScrollArea className="h-[calc(100vh-56px)]">
            <div className="p-2">
              <Collapsible open={isGradesOpen} onOpenChange={setIsGradesOpen}>
                <CollapsibleTrigger className="flex items-center w-full text-left my-1.5 py-1 px-2 rounded">
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 mr-1 transition-transform",
                      isGradesOpen && "transform rotate-90"
                    )}
                  />
                  Grades
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <GradeSelector
                    grades={grades}
                    selectedGrade={state.selectedGrade}
                    onSelectGrade={(grade) =>
                      dispatch({ type: "SET_GRADE", payload: grade })
                    }
                  />
                </CollapsibleContent>
              </Collapsible>
              <AnimatePresence>
                {state.selectedGrade && (
                  <motion.div
                    key="courses"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <CourseList
                      courses={filteredCourses}
                      selectedCourse={state.selectedCourse}
                      onSelectCourse={(course) =>
                        dispatch({ type: "SET_COURSE", payload: course })
                      }
                    />
                  </motion.div>
                )}
                {state.selectedCourse && (
                  <motion.div
                    key="chapters"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <ChapterList
                      chapters={filteredChapters}
                      selectedChapter={state.selectedChapter}
                      onSelectChapter={(chapter) =>
                        dispatch({ type: "SET_CHAPTER", payload: chapter })
                      }
                    />
                  </motion.div>
                )}
                {state.selectedChapter && (
                  <motion.div
                    key="subchapters"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <SubchapterList
                      subchapters={filteredSubchapters}
                      selectedGrade={state.selectedGrade}
                      selectedCourse={state.selectedCourse}
                      selectedChapter={state.selectedChapter}
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
            onClick={() => router.push("/flashcard")}
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
          <Button
            variant="ghost"
            className="flex items-center justify-center p-2 w-full hover:bg-[#4b5162] hover:text-white"
            onClick={() => router.push("/flashcard")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </Button>
        )}
      </>
      <div className="mt-auto mb-4 p-2">
        {session?.user?.name && (
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className={cn(
                "flex items-center w-full",
                isOpen ? "justify-start px-2" : "justify-center"
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold",
                  !isOpen && "w-6 h-6 text-sm"
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

            {isUserMenuOpen && isOpen && (
              <div
                className={cn(
                  "absolute bottom-full left-0 mb-2 w-48 rounded-md shadow-lg",
                  theme === "dark" ? "bg-[#404552]" : "bg-white"
                )}
              >
                <div className="py-1">
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-[#4b5162] hover:text-white"
                  >
                    Logout
                  </button>
                  <button
                    onClick={() => {
                      /* Add settings logic */
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-[#4b5162] hover:text-white"
                  >
                    Settings
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
              "w-8 h-8 rounded-full p-0",
              selectedGrade === grade
                ? "bg-[#5294e2] text-white"
                : "bg-gray-300 dark:bg-[#404552] text-[#7c818c] hover:text-white hover:bg-[#4b5162]"
            )}
            onClick={() => onSelectGrade(grade)}
          >
            {grade}
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

const CourseList: React.FC<{
  courses: string[];
  selectedCourse: string | null;
  onSelectCourse: (course: string) => void;
}> = ({ courses, selectedCourse, onSelectCourse }) => {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger className="flex items-center w-full text-left my-1.5 py-1 px-2 rounded">
        <ChevronRight className="w-4 h-4 mr-1" />
        Courses
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="ml-6 border-l border-[#7d859a]">
          {courses.map((course) => (
            <li key={course} className="relative">
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start rounded-md border-l-2 border-transparent my-0.5",
                  selectedCourse === course
                    ? "bg-[#4b5162] text-white font-bold border-l-[#5294e2]"
                    : "hover:bg-[#4b5162] hover:text-white"
                )}
                onClick={() => onSelectCourse(course)}
              >
                {course}
              </Button>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

const ChapterList: React.FC<{
  chapters: string[];
  selectedChapter: string | null;
  onSelectChapter: (chapter: string) => void;
}> = ({ chapters, selectedChapter, onSelectChapter }) => {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger className="flex items-center w-full text-left my-1.5 py-1 px-2 rounded">
        <ChevronRight className="w-4 h-4 mr-1" />
        Chapters
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="ml-6 border-l border-[#4b5162]">
          {chapters.map((chapter) => (
            <li key={chapter}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start rounded-md my-0.5",
                  selectedChapter === chapter
                    ? "bg-[#4b5162] text-white font-bold"
                    : "hover:bg-[#4b5162] hover:text-white"
                )}
                onClick={() => onSelectChapter(chapter)}
              >
                {chapter}
              </Button>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

const SubchapterList: React.FC<{
  subchapters: string[];
  selectedGrade: string | null;
  selectedCourse: string | null;
  selectedChapter: string | null;
}> = ({ subchapters, selectedGrade, selectedCourse, selectedChapter }) => {
  console.log('Subchapters:', subchapters);
  return (
    <ul className="ml-8 border-l border-[#4b5162]">
          {subchapters.map((subchapter, index) => (
            <li key={index} className="relative">
              {selectedGrade && selectedCourse && selectedChapter && (
                <Link
                  href={{
                    pathname: '/content',
                    query: {
                      grade: selectedGrade,
                      course: selectedCourse,
                      chapter: selectedChapter,
                      subChapter: subchapter
                    }
                  }}
                >
                  <Button
                    variant="ghost"
                    className="w-full text-center rounded-md my-0.5 hover:bg-[#4b5162] hover:text-white"
                  >
                    {subchapter}
                  </Button>
                </Link>
              )}
            </li>
          ))}
        </ul>
  );
};

export default Sidebar;

