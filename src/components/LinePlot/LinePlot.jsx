import Plot from "react-plotly.js";

export default function LinePlot({ date }) {
  let data;

  if (date === "2022-07-29") {
    data = [
      {
        x: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        y: [1, 2, 3.3, 4, 11, 13.6, 15, 14, 12.3, 12, 8, 3],
        type: "scatter",
        name: "Solar production",
        mode: "lines",
        line: {
          color: "#FFC700",
          width: 3,
        },
      },
      {
        x: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        y: [3, 3, 3.3, 5, 6, 6.9, 6.5, 5.4, 8.8, 12, 12, 4],
        type: "bar",
        name: "Energy usage",
        opacity: 0.5,
        line: {
          color: "gray",
          width: 3,
        },
      },
    ];
  } else {
    data = [
      {
        x: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        y: [2, 2.3, 3.3, 4, 5, 5.5, 7.5, 6.5, 8.4, 5, 4.4, 3],
        type: "scatter",
        name: "Solar production",
        mode: "lines",
        line: {
          color: "#FFC700",
          width: 3,
        },
      },
      {
        x: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        y: [4, 2, 2, 3, 5, 7, 5.6, 6.4, 8.8, 10, 11, 4.7],
        type: "bar",
        name: "Energy usage",
        opacity: 0.5,
        line: {
          color: "gray",
          width: 3,
        },
      },
    ];
  }

  return (
    <Plot
      data={data}
      layout={{
        margin: { l: 20, r: 20, b: 20, t: 20 },
        width: 330,
        height: 350,
        paper_bgcolor: "#001723",
        plot_bgcolor: "#001723",
        font: {
          family: "Roboto",
          size: 12,
          color: "white",
        },
        yaxis: {
          visible: true,
          automargin: true,
          title: {
            text: "k.W.",
            font: {
              family: "Roboto",
              size: 14,
              color: "white",
            },
          },
        },
        xaxis: {
          tickmode: "linear", //  If "linear", the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick`
          tick0: 2,
          dtick: 2,
          automargin: true,
          title: {
            text: "Hour",
            font: {
              family: "Roboto",
              size: 14,
              color: "white",
            },
          },
        },
        legend: {
          x: 0.5,
          xanchor: "right",
          y: 1.2,
        },
      }}
      config={{
        displayModeBar: false, // this is the line that hides the bar.
      }}
    />
  );
}
