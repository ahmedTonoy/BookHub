import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Label,
  LabelList,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { x, y, width, height, fill } = props;

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={fill}
      fill={fill}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props) => {
  return <Label {...props} fill={props.fill} />;
};

export default function CustomizeBarShapes({ data }) {
  const isMobile = window.innerWidth < 640;
  return (
    <div style={{ overflowX: "auto" }}>
      <div style={{ minWidth: data.length * 60 }}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip
              labelFormatter={(label, payload) =>
                payload?.[0]?.payload?.fullName || label
              }
              formatter={(value) => [`Pages: ${value}`]}
              cursor={{ fillOpacity: 0.5 }}
            />
            <XAxis
              dataKey="name"
              angle={isMobile ? -90 : -40}
              textAnchor="end"
              interval={0}
              height={isMobile ? 100 : 80}
            />
            <YAxis width="auto" />
            <Bar dataKey="pages" fill="#8884d8" shape={TriangleBar} activeBar>
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}

              <LabelList content={CustomColorLabel} position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
