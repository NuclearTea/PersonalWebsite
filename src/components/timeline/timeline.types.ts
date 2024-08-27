export type TimelineItem = {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  date?: string;
};
export type TimelineProps = {
  items: TimelineItem[];
};
