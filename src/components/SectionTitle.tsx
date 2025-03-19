"use client"
import { styled, SxProps, Theme, Typography } from "@mui/material"
import { useMemo } from "react"

type TSectionTitle = {
    title: string,
    description?: string
}

const TitleSx: SxProps<Theme> = {
    fontSize: "2rem",
    fontWeight: 700,
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: ".5rem"
}

const descriptionSx: SxProps<Theme> = {
    fontSize: ".9rem",
    fontWeight: 500,
    padding: { xs: "0 8%", md: "0 25%" },
    marginBottom: "3.75rem",
    textAlign: "center"
}

const Word = styled("span")<{ index: number }>(({ index }) => ({
    //окрашивать каждое второе слово или букву, если это аббревиатура, в основной цвет приложения
    color: index % 2 !== 0 ? "var(--mui-palette-primary-main)" : "inherit"
}))

const SectionTitle: React.FC<TSectionTitle> = props => {
    const { title, description } = props

    const resolvedTitle = useMemo(() => {
        //проверка строки на множество слов
        const splitedBySpacesTitle = title.split(" ")

        if (splitedBySpacesTitle.length > 1) {
            return splitedBySpacesTitle.map((word, index, array) => {
                //возврат пробелов
                return index + 1 !== array.length ? word + " " : word
            })
        } else {
            //проверка на аббревиатуру
            return title.split(".").filter(word => word).map(word => word + ".")
        }
    }, [title])

    return <>
        <Typography component="h2" sx={TitleSx} >
            {resolvedTitle.map((word, index) => <Word key={word + index} index={index}>{word}</Word>)}
        </Typography>
        {description && <Typography sx={descriptionSx}>{description}</Typography>}
    </>
}

export default SectionTitle