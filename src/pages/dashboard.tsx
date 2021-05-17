import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import { Header } from "../components/Header"
import { Sidebar } from '../components/Sidebar'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'


const Chart = dynamic( () => import('react-apexcharts'), {
    ssr: false,
})


const options : ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false
        },
        foreColor:  theme.colors.gray[500]
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
         enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [ 
            '2021-05-07T11:53:21.000Z',
            '2021-05-08T11:53:21.000Z',
            '2021-05-09T11:53:21.000Z',
            '2021-05-10T11:53:21.000Z',
            '2021-05-11T11:53:21.000Z',
            '2021-05-12T11:53:21.000Z',
            '2021-05-13T11:53:21.000Z',
            '2021-05-14T11:53:21.000Z',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark', // from dark to light
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
}
const series = [
    {
        name: 'series1',
        data: [31, 120, 10, 28, 51, 61, 18, 109 ]
    }
]

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex  
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >
               <Sidebar />

               <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box p="8" bg="gray.800" borderRadius={8} pb="4" >
                        <Text fontSize="lg" mb="4 ">Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={168} />
                    </Box>
                    <Box p="8" bg="gray.800" borderRadius={8} pb="4" >
                        <Text fontSize="lg" mb="4 ">Taxa de abertura</Text>
                        <Chart options={options} series={series} type="area" height={168} />

                    </Box>
                   
               </SimpleGrid>
            </Flex>
        </Flex>

    )
}