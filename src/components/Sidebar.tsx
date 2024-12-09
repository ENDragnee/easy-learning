"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Search, Menu } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  getGrades,
  getSubjects,
  getFolderStructure,
  Chapter,
} from "@/lib/fileSystem";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [isGradesOpen, setIsGradesOpen] = useState(true);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme } = useTheme();

  const grades = getGrades();
  const subjects = selectedGrade ? getSubjects(selectedGrade) : [];
  const chapters =
    selectedGrade && selectedSubject
      ? getFolderStructure(selectedGrade, selectedSubject)
      : [];

  const filteredSubjects = subjects.filter((subject) =>
    subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredChapters = chapters.filter(
    (chapter) =>
      chapter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.subChapters.some((subChapter) =>
        subChapter.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div
      className={cn(
        "fixed top-0 left-0 h-screen transition-all duration-300 ease-in-out pt-5",
        isOpen ? 
          theme === "dark"
            ? "w-64 bg-[#383c4a] text-[#7c818c]"
            : "w-64 bg-gray-200 text-black"
         : theme === "dark"
         ? "w-12 md:bg-[#383c4a] text-[#7c818c]"
         : "w-12 md:bg-gray-200 text-black",
      )}
    >
      <div>
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
                    selectedGrade={selectedGrade}
                    onSelectGrade={(grade) => {
                      setSelectedGrade(grade);
                      setSelectedSubject(null);
                    }}
                  />
                </CollapsibleContent>
              </Collapsible>
              {selectedGrade && (
                <SubjectList
                  subjects={filteredSubjects}
                  selectedSubject={selectedSubject}
                  onSelectSubject={setSelectedSubject}
                />
              )}
              {selectedSubject && (
                <ChapterList
                  chapters={filteredChapters}
                  selectedGrade={selectedGrade}
                  selectedSubject={selectedSubject}
                />
              )}
            </div>
          </ScrollArea>
        )}
      </div>
      <div
        className={cn(
          "absolute bottom-4 left-0 right-0 flex justify-center",
          isOpen ? "w-64" : "w-12"
        )}
      >
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "rounded-full justify-center text-[#7c818c] ",
            !isOpen && "w-10 h-10"
          )}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Moon className="h-5 w-5 hover:text-[#eaeff9]" />
          ) : (
            <Sun className="h-5 w-5 hover:text-[#545d75]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
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
            {grade.replace("grade", "").trim()}
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
}> = ({ subjects, selectedSubject, onSelectSubject }) => {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger className="flex items-center w-full text-left my-1.5 py-1 px-2 rounded">
        <ChevronRight className="w-4 h-4 mr-1" />
        Subjects
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="ml-4 border-l border-[#7d859a]">
          {subjects.map((subject) => (
            <li key={subject} className="relative">
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start rounded-md border-l-2 border-transparent my-0.5",
                  selectedSubject === subject
                    ? "bg-[#4b5162] text-white font-bold border-l-[#5294e2]"
                    : "hover:bg-[#4b5162] hover:text-white"
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
  selectedSubject: string | null;
}> = ({ chapters, selectedGrade, selectedSubject }) => {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger className="flex items-center w-full text-left my-1.5 py-1 px-2 rounded">
        <ChevronRight className="w-4 h-4 mr-1" />
        Chapters
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="ml-4 border-l border-[#4b5162]">
          {chapters.map((chapter) => (
            <li key={chapter.name}>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center w-full text-left my-0.5 py-1 px-2 hover:bg-[#4b5162] hover:text-white rounded-md">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {chapter.name}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="ml-4 border-l border-[#4b5162]">
                    {chapter.subChapters.map((subChapter) => (
                      <li key={subChapter} className="relative">
                        {selectedGrade && selectedSubject && (
                          <Link
                            href={`/${selectedGrade}/${selectedSubject}/${chapter.name}/${subChapter}`}
                          >
                            <Button
                              variant="ghost"
                              className="w-full text-left rounded-md my-0.5 hover:bg-[#4b5162] hover:text-white"
                            >
                              {subChapter}
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
