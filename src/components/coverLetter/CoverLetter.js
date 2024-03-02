import { useState, useEffect, useCallback } from "react"
import { InputText } from "../common/inputText/InputText"
import { CoverLetterWrapper, SidebarWrapper, MainWrapper } from "./styles"
import { Textarea } from "../common/textarea/Textarea"
import { templates } from "./templates"
import { Button } from "../common/button/Button"

export const CoverLetter = () => {
    const [companyName, setCompanyName] = useState('Your company')
    const [positionName, setPositionName] = useState('This')
    const [content, setContent] = useState(templates[0])
    
    const replaceString = useCallback((str) => {
        return str.replaceAll('<< companyName >>', companyName).replaceAll('<< positionName >>', positionName)
    }, [companyName, positionName])

    useEffect(() => {
        setContent(replaceString(templates[0]));
    }, [companyName, positionName, replaceString])

    useEffect(() => {
        console.log('content', content)
    }, [content])

    return (
        <CoverLetterWrapper>
            <SidebarWrapper>
                <InputText 
                    label='Position name'
                    value={positionName}
                    onChangeHandle={(e) => setPositionName(e.target.value)}
                />
                <InputText 
                    label='Company name'
                    value={companyName}
                    onChangeHandle={(e) => setCompanyName(e.target.value)}
                />
                <Button type='primary'>Download</Button>
            </SidebarWrapper>
            <MainWrapper>
                <Textarea
                    key={content}
                    label='Template'
                    onChangeHandle={(e) => setContent(e.target.value)}
                    value={content}
                />
            </MainWrapper>
        </CoverLetterWrapper>
    )
}