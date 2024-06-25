import React from "react";
import styles from "./FileCard.module.scss";
import { getExtensionFromFileName } from "@/utils/getExtensionFromFileName";
import { isImage } from "@/utils/isImage";
import { getColorByExtension } from "@/utils/getColorByExtension";
import { FileTextOutlined } from "@ant-design/icons";
import Link from "next/link";

interface FileCardProps {
    filename: string;
    originalName: string;
}

export const FileCard: React.FC<FileCardProps> = ({
    originalName,
    filename,
}) => {
    const ext = getExtensionFromFileName(filename);
    const imageUrl =
        ext && isImage(ext) ? "http://localhost:7777/uploads/" + filename : "";

    const color = getColorByExtension(ext);
    const classColor = styles[color];

    function download() {}

    return (
        <div className={styles.root}>
            <a
                className={styles.btnDownload}
                href={"/uploads/" + filename}
                download={originalName}
            >
                Скачать
            </a>
            <div className={styles.icon}>
                <i className={classColor}>{ext}</i>
                {isImage(ext) ? (
                    <img className={styles.image} src={imageUrl} alt="File" />
                ) : (
                    <FileTextOutlined />
                )}
            </div>
            <span>{originalName}</span>
        </div>
    );
};
