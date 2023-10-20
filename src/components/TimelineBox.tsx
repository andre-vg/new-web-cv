import {
  VerticalTimelineElement,
  VerticalTimelineElementProps,
} from 'react-vertical-timeline-component';

export default function TimelineBox({
  children,
  ...props
}: VerticalTimelineElementProps) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'transparent',
        accentColor: 'transparent',
        boxShadow: 'none',
        fontWeight: 'bold',
        padding: '0px',
      }}
      contentArrowStyle={{
        display: 'none',
      }}
      {...props}
    >
      {children}
    </VerticalTimelineElement>
  );
}
