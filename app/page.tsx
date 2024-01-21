"use client";
import Image from "next/image";
import React from "react";
import { epg as epgData, channels as channelData } from "@/test";

import { useEpg, Epg, Layout } from "planby";

export default function Home() {
  const channels = React.useMemo(() => channelData, []);

  const epg = React.useMemo(() => epgData, []);

  const {
    getEpgProps,
    getLayoutProps,
    onScrollToNow,
    onScrollLeft,
    onScrollRight,
  } = useEpg({
    epg,
    channels,
    startDate: "2022-10-18T00:00:00", // or 2022-02-02T00:00:00
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ height: "600px", width: "1200px" }}>
        <Epg {...getEpgProps()}>
          <Layout {...getLayoutProps()} />
        </Epg>
      </div>
    </main>
  );
}
