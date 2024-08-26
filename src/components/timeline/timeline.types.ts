export type TimelineItem = {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
};
export type TimelineProps = {
  items: TimelineItem[];
};
