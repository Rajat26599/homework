import { useState } from "react"
import { InputText } from "../common/inputText/InputText"
import { CoverLetterWrapper, SidebarWrapper, MainWrapper } from "./styles"
import { Textarea } from "../common/textarea/Textarea"

export const CoverLetter = () => {
    const [companyName, setCompanyName] = useState('')
    const [positionName, setPositionName] = useState('')
    const [content, setContent] = useState('')
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
                <button>Download</button>
            </SidebarWrapper>
            <MainWrapper>
                <Textarea 
                    label='Template'
                    onChangeHandle={(e) => setContent(e.target.value)}
                >{content}</Textarea>
            </MainWrapper>
        </CoverLetterWrapper>
    )
}