import Chart from "react-apexcharts";

// chart data
const state = {
  options: {
    series: [4, 6, 2],
    labels: ["Active", "Completed", "Endend"],
    colors: ["#FFB946", "#2ED47A", "#F7685B"],
    legend: {
      show: true,
      position: "left",
      horizontalAlign: "center",
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "80px",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
            },
          },
        },
      },
    },
  },
  series: [4, 6, 2],
};

const Donut = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Chart
        options={state.options}
        series={state.series}
        type="donut"
        width={400}
        height={230}
      />
    </div>
  );
};

export default Donut;
