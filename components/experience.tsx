"use client";

import React from "react";
import Image from "next/image";
import { experience } from "@/lib/content";
import { Section } from "./section";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Meteors } from "@/components/ui/meteors";

export function Experience() {
  return (
    <Section id="experience" title="Experience" className="relative overflow-hidden">
      <Meteors number={20} className="opacity-20" />
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {experience.map((entry, index) => (
            <div key={`${entry.company}-${entry.role}`} className="mb-10">
              <h2 className="bg-slate-900 text-white rounded-full text-sm w-fit px-4 py-1 mb-4 border border-white/5">
                {entry.timeframe}
              </h2>

              <Card className="border-white/5 bg-slate-900/30 backdrop-blur-sm shadow-card hover:border-accent/40 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {entry.logo && (
                      <div className="h-10 w-10 flex-shrink-0 bg-white/5 rounded-lg p-1 border border-white/5">
                        <Image
                          src={entry.logo}
                          alt={entry.company}
                          width={40}
                          height={40}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{entry.company}</h3>
                      <p className="text-sm text-slate-400">{entry.role}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-slate-300 mb-4">
                    {entry.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {entry.tech && (
                    <div className="flex flex-wrap gap-2">
                      {entry.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="bg-white/5 text-slate-400 border-white/5 text-[10px] uppercase tracking-wider">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </TracingBeam>
    </Section>
  );
}
