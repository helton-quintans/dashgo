import { Header } from "../components/Header";
import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  
  tooltip: {
    enabled: false,
  },
  // xaxis: {
  //   type: "datetime",
  //   axisBorder: {
  //     color: theme.colors.gray[600]
  //   },
  //   axisTicks: {
  //     color: theme.colors.gray[600]
  //   },
  //   categories: [
  //     "2022-09-18T00:00:000Z",
  //     "2022-09-19T00:00:000Z",
  //     "2022-09-20T00:00:000Z",
  //     "2022-09-21T00:00:000Z",
  //     "2022-09-22T00:00:000Z",
  //     "2022-09-23T00:00:000Z",
  //     "2022-09-24T00:00:000Z",
  //   ],
  // },
  fill: {
    opacity: 0.3,
    colors:['#f411fc', '#9C27B0'],
    type: "gradient",
    gradiente:{
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
};

const series1 = [{ name: "series", data: [31, 65, 10, 120, 1, 33, 22] }];
const series2 = [{ name: "series", data: [31, 2000, , 90, 1000, 400, 800] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px">
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series1} type="area" height={160} />
          </Box>

          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            // pb="4"
          >
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart options={options} series={series2} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
