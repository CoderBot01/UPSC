
'use client';

import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/PageHeader';
import { ArrowRight, BookOpen, Target, Library, Brain, Activity, CalendarDays, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { format } from 'date-fns';
import useLocalStorageState from '@/hooks/useLocalStorageState'; // Assuming this hook exists and works
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
}

function FeatureCard({ title, description, href, icon: Icon }: FeatureCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <Icon className="h-6 w-6 text-primary" />
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={href}>
            Go to {title} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function DashboardPage() {
  const [examDate, setExamDate] = useLocalStorageState<Date | undefined>('upscExamDate', undefined);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!examDate || !isMounted) {
      setTimeLeft(null);
      return;
    }

    const calculateTimeLeft = () => {
      const difference = new Date(examDate).getTime() - new Date().getTime();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return null; // Return null to clear interval
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft(); // Initial calculation
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [examDate, isMounted]);

  const examDateString = useMemo(() => {
    return examDate ? format(new Date(examDate), 'PPP') : 'Not set';
  }, [examDate]);


  if (!isMounted) {
    return null; 
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Welcome to UPSC AI Guide"
        description="Your personalized AI assistant for UPSC civil services exam preparation."
      />

      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-primary mb-3">Conquer the UPSC Exam</h2>
            <p className="text-muted-foreground mb-6">
              Leverage AI-powered tools, comprehensive resources, and effective planning to ace your preparation.
              Navigate through the syllabus, track your progress, set goals, and get smart recommendations.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/syllabus">
                  Explore Syllabus <BookOpen className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/ai-tools/practice-questions">
                  Practice Questions <Brain className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative h-full min-h-[300px]">
            <Image
              src="/images/hero.webp"
              alt="UPSC Preparation"
              layout="fill"
              objectFit="cover"
              data-ai-hint="study books"
            />
          </div>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            Exam Countdown
          </CardTitle>
          <CardDescription>Set your exam date to see how much time you have left.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !examDate && "text-muted-foreground"
                  )}
                >
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {examDate ? format(new Date(examDate), "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={examDate ? new Date(examDate) : undefined}
                  onSelect={(date) => setExamDate(date)}
                  initialFocus
                  disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() -1))} // Disable past dates
                />
              </PopoverContent>
            </Popover>
            {examDate && (
              <Button variant="ghost" size="sm" onClick={() => setExamDate(undefined)}>Clear Date</Button>
            )}
          </div>
          {timeLeft && examDate && new Date(examDate).getTime() > new Date().getTime() ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {(['days', 'hours', 'minutes', 'seconds'] as const).map((unit) => (
                <div key={unit} className="bg-muted p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-primary">{timeLeft[unit]}</div>
                  <div className="text-sm text-muted-foreground capitalize">{unit}</div>
                </div>
              ))}
            </div>
          ) : timeLeft && examDate && new Date(examDate).getTime() <= new Date().getTime() ? (
             <p className="text-lg font-semibold text-destructive">The exam date has passed!</p>
          ) : (
            <p className="text-muted-foreground">Please set your exam date to start the countdown.</p>
          )}
        </CardContent>
      </Card>


      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Syllabus Coverage"
          description="Navigate the vast UPSC syllabus interactively and mark your completed topics."
          href="/syllabus"
          icon={BookOpen}
        />
        <FeatureCard
          title="Progress Tracking"
          description="Monitor your preparation journey and visualize your progress across subjects."
          href="/progress"
          icon={Activity}
        />
        <FeatureCard
          title="Resource Library"
          description="Access a curated collection of essential articles, books, and online resources."
          href="/resources"
          icon={Library}
        />
        <FeatureCard
          title="Goal Setting"
          description="Set daily and weekly study targets to stay focused and motivated."
          href="/goals"
          icon={Target}
        />
        <FeatureCard
          title="AI Study Material"
          description="Get AI-driven recommendations for study materials tailored to your needs."
          href="/ai-tools/study-material"
          icon={Brain}
        />
        <FeatureCard
          title="AI Practice Questions"
          description="Generate custom practice questions for any topic in the UPSC exam format."
          href="/ai-tools/practice-questions"
          icon={Brain}
        />
      </div>
    </div>
  );
}
