import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Disconnected from "../components/Disconnected";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Buildoor - 🚀</title>
                <meta name="description" content="The NFT Collection for Buildoors" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box
                w="full"
                h="calc(100vh)"
                backgroundPosition="center"
                bgImage={"url(home-background.svg)"}
            >
                <Stack w="full" h="calc(100vh)" justify="center">
                    <Navbar />
                    <Spacer />
                    <Disconnected />
                    <Center></Center>
                    <Spacer />
                    <Center>
                        <Box marginBottom={4} color="white">
                            <a href="https://twitter.com/_buildspace">built with @_buildspace</a>
                        </Box>
                    </Center>
                </Stack>
            </Box>
        </div>
    );
}
