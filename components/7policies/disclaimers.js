import React from 'react'
import { Flex } from '@chakra-ui/layout'
import { Image, List, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'


const Disclaimer = () => {
    return (
        <>
            <Flex
                alignItems={{ base:"center" }}
                flexDirection="column"
                justifyContent="flex-start"
                minH={{ base:"100vh" }}
                px={{ base:"15px", md:"30px" }}
                py={{ base:100 }}
                w={{ base:"100%" }}
            >
                <Image alt="" src="/illustrations/privacy.svg" my={2} w={150} />
                <Flex alignItems="center" bg="gray.50" flexDirection="column" py={4} w="full">
                    <Text color="#5a5a5a" fontFamily="cutive" fontWeight={700}>General Disclaimers</Text>
                    <Text color="#5a5a5a" fontFamily="poppins" fontSize={14} fontWeight={300} mt={0}>Disclaimers on our services.</Text>
                </Flex>

                <Flex flexDirection="column" p={{ base:15, md:50 }} w="100%">

                    <Text borderLeft="4px" borderColor="cyan.400" color="#5a5a5a" fontFamily="poppins" pl={3} my={2}>Disclaimers.</Text>

                    <Accordion w="100%">
                        <AccordionBox
                            title="GENERAL DISCLAIMER OF WARRANTIES"
                            textbox1="YOU EXPRESSLY UNDERSTAND AND AGREE THAT USE OF THE SITE, THE SERVICES AND THE SITE MATERIAL IS 
                                AT YOUR SOLE RISK AND THAT THE SITE, THE SERVICES AND THE SITE MATERIAL ARE PROVIDED ON AN “AS IS” 
                                AND “AS AVAILABLE” BASIS AND WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, 
                                WE AND OUR SUPPLIERS AND LICENSORS EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS 
                                OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
                                PARTICULAR PURPOSE AND NON-INFRINGEMENT, OR ANY WARRANTY ARISING FROM A COURSE OF DEALING, PERFORMANCE, 
                                OR TRADE USAGE."
                            textbox2="SIDEBRIEF IS NOT ENGAGED IN RENDERING LEGAL, ACCOUNTING, FINANCIAL TAX OR OTHER PROFESSIONAL 
                                ADVICE OR SERVICES. THE SERVICES DO NOT INCLUDE THE PROVISION OF LEGAL, ACCOUNTING, FINANCIAL TAX OR 
                                OTHER PROFESSIONAL ADVICE AND SHOULD NOT BE RELIED UP ON AS SUCH. IF ANY SUCH PROFESSIONAL ADVICE IS 
                                REQUIRED, WE URGE YOU TO CONSULT WITH APPROPRIATE ADVISORS. BLL SHALL IN NO WAY BE CONSTRUED AS A 
                                “PREPARER” OF ANY TAX OR LICENSE RELATED DOCUMENTS."
                            textbox3="SIDEBRIEF AND ITS SUPPLIERS AND LICENSORS CANNOT AND DO NOT ACCEPT ANY LIABILITY FOR DELAYS, 
                                ERRORS OR OMISSIONS IN THE INFORMATION PROVIDED BY LICENSING AUTHORITIES OR OTHER GOVERNMENTAL OR 
                                THIRD-PARTY INFORMATION PROVIDERS OR THEIR FILING OR RECORDING SYSTEMS. SIDEBRIEF AND ITS SUPPLIERS AND 
                                LICENSORS EXPRESSLY DISCLAIM ALL LIABILITY FOR PENALTIES, FEES OR INTEREST ARISING OUT OF OR RELATING 
                                TO THE PREPARATION OR FILING, OR FAILURE OR DELAY IN FILING, OF ANY TAX OR LICENSE DOCUMENT."
                            textbox4="NO THIRD-PARTY MAY RELY ON OR BENEFIT FROM THE SERVICES IN ANY MANNER, FOR ANY PURPOSE, AND YOU 
                                SHALL BE RESPONSIBLE FOR ALL DAMAGES, LOSSES, PENALTIES, COSTS, EXPENSES, FEES AND OTHER LIABILITIES 
                                ARISING FROM OR RELATED TO ANY SUCH UNAUTHORIZED RELIANCE."
                            textbox5="Applicable law may not allow the disclaimer or exclusion of certain implied warranties or 
                                statutory rights, so the foregoing disclaimers and limitations may not apply to you. To the extent 
                                that in a particular circumstance any disclaimer or limitation set forth in this Section is prohibited 
                                by applicable law or held to be unenforceable, then the above disclaimers and limitations will to 
                                the fullest extent permitted by applicable law in that particular circumstance."
                        />

                        <AccordionBox
                            title="LIMITATIONS OF LIABILITY"
                            textbox1="IN NO EVENT WILL WE OR ANY OF OUR SUPPLIERS OR LICENSORS BE LIABLE (JOINTLY OR SEVERALLY) TO YOU 
                                OR ANY OTHER PERSON AS A RESULT OF YOUR ACCESS TO OR USE OF THE SITE, THE SERVICES OR THE SITE MATERIAL 
                                FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT 
                                LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES, REGARDLESS OF 
                                THE THEORY OF LIABILITY AND EVEN IF WE OR OUR INFORMATION SUPPLIES HAVE BEEN ADVISED OF THE POSSIBILITY 
                                OR COULD HAVE FORESEEN SUCH DAMAGES, AND IRRESPECTIVE OF ANY FAILURE OF AN ESSENTIAL PURPOSE OF A 
                                LIMITED REMEDY."
                            textbox2="WITHOUT LIMITING THE FOREGOING, THE LIABILITY OF SIDEBRIEF AND OUR SUPPLIERS AND LICENSORS UNDER 
                                THESE TERMS SHALL NOT EXCEED (A) IN THE AGGREGATE THE AMOUNTS PAID BY YOU TO SIDEBRIEF FOR ACCESS TO 
                                OR USE OF THE SITE, THE SERVICES OR ANY SITE MATERIAL IN THE 3-MONTH PERIOD IMMEDIATELY PRECEDING THE 
                                FIRST CLAIM HEREUNDER AND (B) WITH RESPECT TO ANY ORDER FOR SERVICES, THE AMOUNT PAID BY YOU TO 
                                SIDEBRIEF FOR SUCH SERVICES."
                            textbox3="Applicable law may not allow the limitation or exclusion of certain damages or liability, so the 
                                foregoing limitations may not apply to you. To the extent that in a particular circumstance any limitation 
                                on damages or liability set forth in this Section is prohibited by applicable law or held to be unenforceable, 
                                then above limitations on damages and liability will apply to the maximum extent permitted by applicable 
                                law in that particular circumstance."
                        />
                        
                        <AccordionBox
                            title="Indemnification"
                            textbox1="You agree to indemnify and hold harmless and (at our request) defend us and our affiliates, officers, 
                                directors, employees, agents, and representatives from and against any claim, liability, loss, damage, cost 
                                and expense, including reasonable without limitation attorneys’ fees), that directly or indirectly are 
                                caused by or arise out of your use of the Site or any Service or Site Material, your violation of these 
                                Terms, or your violation of any rights of another person or entity."
                            textbox3="If you have any questions about this Disclaimer Policy, please contact us at: policy@sidebrief.com."
                        />

                    </Accordion>

                </Flex>

            </Flex>
        </>
    )
}


export const AccordionBox = ({ ...props }) => {
    return (
        <>
            <AccordionItem>
                <AccordionButton>
                    <Text color="#5a5a5a" fontFamily="cutive" fontWeight={700}> {props.title ? props.title : ""} </Text>
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={500}> {props.altText ? props.altText : ""} </Text>
                    <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {props.textbox1 ? props.textbox1 : ""} </Text>
                    <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {props.textbox2 ? props.textbox2 : ""} </Text>
                    <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {props.textbox3 ? props.textbox3 : ""} </Text>
                    <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {props.textbox4 ? props.textbox4 : ""} </Text>
                    <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {props.textbox5 ? props.textbox5 : ""} </Text>
                    <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {props.textbox6 ? props.textbox6 : ""} </Text>
                    <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {props.textbox7 ? props.textbox7 : ""} </Text>
                    <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {props.textbox8 ? props.textbox8 : ""} </Text>
                    <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {props.textbox9 ? props.textbox9 : ""} </Text>
                    <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {props.textbox10 ? props.textbox10 : ""} </Text>
                    <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {props.textbox11 ? props.textbox11 : ""} </Text>
                </AccordionPanel>
            </AccordionItem>
        </>
    )
}

export const ListBox = ({ text }) => {
    return (
        <>
            <Text color="gray" fontSize={{ base:12, md:14 }} my={{ base:2, md:4 }} w={{ base:"90%", md:"70%" }}>
                <ListIcon color="cyan.600" />
                {text}
            </Text>
        </>
    )
}


export default Disclaimer 
