import CoppyBox from "@/Components/CoppyBox";
import DownloadButton from "@/Components/DownloadButton";
import Marker from "@/Components/Marker";
import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Layout from "@/Layouts/Layout";
import ChocoButton from "@/Components/ChocoButton";

const Show = (props) => {
    const { letter } = props;
    const message =
        "チョコが届きました！\n下記urlでカメラを起動してmeijiのアーモンドチョコかARマーカーにかざしてみてね!\n" +
        (
            <a
                href={`https://ar-choco-heroku.herokuapp.com/valentine/${letter.id}`}
            >
                https://ar-choco-heroku.herokuapp.com/valentine/${letter.id}
            </a>
        );
    return (
        <div className="text-center flex flex-col justify-center">
            <Head>
                <title>AR Letter</title>
            </Head>
            <div className="my-8 mx-auto w-3/4 mt-20 mb-1 title-border-red py-6 sm:px-2 px-4">
                <a
                    href={"http://line.me/R/msg/text/?" + message}
                    className="text-4xl py-8 px-8"
                >
                    LINEであの人に送る
                    <img
                        className="inline-block ml-3 mb-2"
                        src="/LINE_Brand_icon.png"
                        width="50"
                        height="50"
                    ></img>
                </a>
            </div>
            <p className="mx-auto w-3/4 mt-20 mb-5">
                LINE以外のツールで送る人は、以下のメッセージと画像を一緒に送ってね
            </p>
            <CoppyBox>{message}</CoppyBox>
            <div className="sm:flex sm:justify-center text-center">
                <Marker
                    src={`/QR/${letter.id}.svg`}
                    toUrl={`https://ar-choco-heroku.herokuapp.com/valentine/${letter.id}`}
                >
                    QRコードはこちら
                    <DownloadButton
                        href={`https://chart.apis.google.com/chart?chs=500x500&cht=qr&chl=https://ar-choco-heroku.herokuapp.com/valentine/${letter.id}`}
                    />
                </Marker>
                <Marker href={`/pattern-ar.png`} src={`/pattern-ar.png`}>
                    ARマーカーはこちら
                    <DownloadButton href={`/pattern-ar.png`} />
                </Marker>
            </div>
            <div className="flex justify-center text-center">
                <ChocoButton
                    href="/"
                    className="my-8 mx-auto w-3/4 mt-20 mb-20"
                >
                    TOPページに戻る
                </ChocoButton>
            </div>
        </div>
    );
};

Show.layout = (page) => <Layout children={page} />;

export default Show;
