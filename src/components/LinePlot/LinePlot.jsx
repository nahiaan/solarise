import Plot from "react-plotly.js";

export default function LinePlot() {
  return (
    <Plot
      data={[
        {
          x: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
          y: [1, 2, 3.3, 4, 6, 9.9, 13, 14, 10, 15, 8, 3],
          type: "scatter",
          mode: "lines",
          line: {
            color: "#FFC700",
            width: 3,
          },
        },
      ]}
      layout={{
        margin: { l: 20, r: 20, b: 20, t: 20 },
        width: 300,
        height: 400,
        paper_bgcolor: "#001723",
        plot_bgcolor: "#001723",
        font: {
          family: "Roboto",
          size: 15,
          color: "white",
        },
        yaxis: {
          visible: false,
        },
        xaxis: {
          tickmode: "linear", //  If "linear", the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick`
          tick0: 2,
          dtick: 2,
        },
      }}
    />
  );
}
