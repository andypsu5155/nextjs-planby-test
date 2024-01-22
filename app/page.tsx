"use client";

import React from "react";
//import { epg as epgData, channels as channelData } from "@/test2";
import { createChannelsEpgs } from "@/data/test-data";

import {
  useEpg,
  Epg,
  Layout,
  ChannelBox,
  ChannelLogo,
  Channel,
  ProgramBox,
  ProgramContent,
  ProgramFlex,
  ProgramStack,
  ProgramTitle,
  ProgramText,
  ProgramImage,
  useProgram,
  Program,
  ProgramItem,
} from "planby";

interface ChannelItemProps {
  channel: Channel;
}

const Item = ({ program, ...rest }: ProgramItem) => {
  const { styles, formatTime, isLive, isMinWidth } = useProgram({
    program,
    ...rest,
  });

  const { data } = program;
  const { image, title, since, till } = data;

  const sinceTime = formatTime(since);
  const tillTime = formatTime(till);

  if (title !== "Lunch") {
    return (
      <ProgramBox width={styles.width} style={styles.position}>
        <ProgramContent width={styles.width} isLive={isLive}>
          <ProgramFlex>
            {isLive && isMinWidth && <ProgramImage src={image} alt="Preview" />}
            <ProgramStack>
              <ProgramTitle>{title}</ProgramTitle>
              <ProgramText>
                {sinceTime} - {tillTime}
              </ProgramText>
            </ProgramStack>
          </ProgramFlex>
        </ProgramContent>
      </ProgramBox>
    );
  } else {
    return (
      <ProgramBox
        width={styles.width}
        style={styles.position}
        className="!bg-red-400 rounded-xl"
      >
        <ProgramContent width={styles.width} isLive={isLive}>
          <ProgramFlex>
            {isLive && isMinWidth && <ProgramImage src={image} alt="Preview" />}
            <ProgramStack>
              <ProgramTitle>{title}</ProgramTitle>
              <ProgramText>
                {sinceTime} - {tillTime}
              </ProgramText>
            </ProgramStack>
          </ProgramFlex>
        </ProgramContent>
      </ProgramBox>
    );
  }
};

const ChannelItem = ({ channel }: ChannelItemProps) => {
  const { position, logo } = channel;

  return (
    <ChannelBox {...position}>
      <ChannelLogo
        onClick={() => console.log("channel", channel)}
        src={logo}
        alt="Logo"
        className="p-3"
      />
      <p className="pr-5">{channel.title}</p>
    </ChannelBox>
  );
};

export default function Home() {
  const { epgs: epgData, channels: channelData } = createChannelsEpgs();
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
    startDate: "2024-01-17T15:00:00", // or 2022-02-02T00:00:00
    endDate: "2024-01-18T08:00:00",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[1920px]">
        <Epg {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
            renderChannel={({ channel }) => (
              <ChannelItem key={channel.uuid} channel={channel} />
            )}
            renderProgram={({ program, ...rest }) => (
              <Item key={program.data.id} program={program} {...rest} />
            )}
          />
        </Epg>
      </div>
    </main>
  );
}
