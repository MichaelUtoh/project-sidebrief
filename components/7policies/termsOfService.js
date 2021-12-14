import React from 'react'
import { Flex } from '@chakra-ui/layout'
import { Image, List, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'


const TermsOfService = () => {
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
                <Image src="/illustrations/privacy.svg" my={2} w={150} />
                <Flex alignItems="center" bg="gray.50" flexDirection="column" py={4} w="full">
                    <Text color="gray.700" fontWeight={700}>Terms & Conditions</Text>
                    <Text color="gray.400" fontSize={14} mt={0}>Terms and conditions of services we provide.</Text>
                </Flex>

                <Flex flexDirection="column" p={{ base:15, md:50 }} w="100%">

                    <Accordion w="100%">
                        <AccordionBox
                            title="Acceptance"
                            textbox1="These terms of service are entered into by and between Sidebrief Limited (”Sidebrief”, “we” or “us”) 
                                    and the individual or entity (“you”) visiting sidebrief.com or any of our local subsidiary websites 
                                    (together with any content or functionality offered on or though such website, the “Site”) or ordering 
                                    or using services offered by Sidebrief on or through the Site (the “Services”)."
                            textbox2="The following terms and conditions, and any other terms, rules, guidelines or policies applicable to 
                                    the Site or the Services and posted by Sidebrief through the Site or otherwise communicated to you in 
                                    writing in connection with your order of Services (such terms, rules, guidelines or policies, – the 
                                    “Policies”and together with these terms and conditions, the “Terms”), govern your access to and use of 
                                    the Site and the Services."
                            textbox3="Please read the Terms carefully before you start to use the Site or order or use any Services. By 
                                    accessing or using the Site or by ordering or using any Services, you accept and agree to be bound and 
                                    abide by these Terms, including the Policies. If you do not want to agree to these Terms, you must not 
                                    access or use the Site or order or use any Services."
                            textbox4="Services are specific to the geographic area in which you are located and may not be available in all 
                                    geographic locations. By accessing or using this Site or ordering or using any Services, you represent 
                                    and warrant that you are of legal age to form a binding contract with Sidebrief and meet all of the 
                                    foregoing eligibility requirements."
                            textbox5="If you are an individual agreeing to these Terms on behalf of an entity, you represent and warrant 
                                    that you have the requisite power, authority and capacity to bind that entity, and to order the 
                                    Services ordered by you hereunder on behalf of such entity, and “you” shall refer herein to such entity."
                            textbox6="You further represent and warrant that you shall not use the Site or the Services in a manner 
                                    contrary to or in violation of any applicable federal, state, or local law, rule, or regulation. If you 
                                    cannot make these representations and warranties or do not meet all of these requirements, you must not 
                                    access or use the Site or order or use any Services."
                        />

                        <AccordionBox
                            title="Modification to Terms"
                            textbox1="Sidebrief reserves the right to revise the Terms, at any time in our sole discretion. All changes are 
                                    effective immediately when we post them on the Site and apply to all access to and use of the Site and 
                                    orders for and use of the Services thereafter."
                            textbox2="Your continued use of the Site or orders or use of the Services following the posting of revised 
                                    Terms means that you accept and agree to the revised Terms. You are expected to check the Site and this 
                                    page from time to time so that you are aware of any changes, as they are binding on you."
                        />
                            
                        <AccordionBox
                            title="Services and Disclaimers"
                            textbox1="Sidebrief provides services to assist individuals and companies of all sizes in formation, researching, 
                                    acquiring and managing federal, state, local, and municipal licenses, registrations, permits and tax 
                                    registrations (“Licenses”) across African countries."
                            textbox2="The Services we offer through the Site include compliance packages that automatically research our 
                                    databases of Licenses and present you with a report listing the initial Licenses required for your 
                                    business, including certain information to assist you in filing for those Licenses (each a “Compliance 
                                    Report”), as well as more comprehensive services where you provide us with the information required for 
                                    filing the Licenses and on a one-time basis we prepare the License forms using your information for you 
                                    to file or in some cases file the Licenses on your behalf (“Compliance Services”)."
                            textbox3="Please note that these Terms apply only to the Services that you can order directly through the Site 
                                    (i.e. Compliance Reports and Compliance Services). However, they apply to those Services even if your 
                                    order is initiated on the Site but finalized by telephone, email or other means."
                            textbox4="For Compliance Services, the cost of such Services may vary based on the jurisdiction and the type 
                                    of License. While we may list a package price for such Compliance Services on the Site, that price is 
                                    reflective of the price for form preparation services in most jurisdictions. However, it may not be 
                                    valid in all jurisdictions or reflect more complicated Compliance Services, such as where we do the 
                                    filing on your behalf."
                            textbox5="Accordingly, for Compliance Services, you may be required to complete your order through a telephone 
                                    call, email or via other means separate from the online ordering process through the Site."
                            textbox6="We also offer services in addition to the Services offered through the Site, such as an online access 
                                    to software for you to research, acquire and manage Licenses and associated renewals on an ongoing basis 
                                    and license compliance and management services for such purposes."
                            textbox7="SIDEBRIEF IS NOT ENGAGED IN RENDERING LEGAL, ACCOUNTING, FINANCIAL TAX OR OTHER PROFESSIONAL ADVICE OR 
                                    SERVICES. THE SERVICES DO NOT INCLUDE THE PROVISION OF LEGAL, ACCOUNTING, FINANCIAL TAX OR OTHER 
                                    PROFESSIONAL ADVICE AND SHOULD NOT BE RELIED UPON AS SUCH. IF ANY SUCH PROFESSIONAL ADVICE IS REQUIRED, 
                                    WE URGE YOU TO CONSULT WITH APPROPRIATE ADVISORS. WE SHALL IN NO WAY BE CONSTRUED AS A “PREPARER” OF 
                                    ANY TAX OR LICENSE RELATED DOCUMENTS."
                        />
                        
                        <AccordionBox
                            title="Site Material"
                            textbox1="The content, including but not limited to Compliance Reports, License application or registration forms, 
                                    and other written text, information, forms, applications, software, graphics, pictures, images, video, 
                                    music, sound, data and files, to which you have access to as part of, or through your use of the Site or 
                                    the Services (“Site Material”) comes from a variety of sources. Some of this Site Material originates from 
                                    Sidebrief, but much of the Site Material originates from other sources. For example, the forms for License 
                                    applications or registrations available through the Services originate from the licensing authority for 
                                    such License."
                            textbox2="SIDEBRIEF IS NOT RESPONSIBLE FOR AND DOES NOT ENDORSE ANY SITE MATERIAL THAT DOES NOT ORIGINATE FROM 
                                    SIDEBRIEF AND CANNOT AND DOES NOT ACCEPT ANY LIABILITY WITH RESPECT TO ANY SUCH SITE MATERIAL. ALL SITE 
                                    MATERIAL, INCLUDING SITE MATERIAL ORIGINATING FROM SIDEBRIEF, IS PROVIDED TO YOU “AS IS” FOR YOUR USE IN 
                                    ACCORDANCE WITH THESE TERMS ONLY. NEITHER WE NOR OUR SUPPLIERS OR LICENSES MAKE ANY REPRESENTATIONS OR 
                                    WARRANTIES WITH RESPECT TO ANY SITE MATERIAL."
                            textbox3="Certain Site Material is available for free to all users of the Site, and other Site Material 
                                    (“Restricted Site Material”) is made available only to users who are authorized to access and use such 
                                    Site Material as part of a purchase of Services hereunder or that are an authorized user of an entity 
                                    that has purchased a right to access and use such Site Material pursuant to a separate written agreement 
                                    with Sidebrief (each an “Authorized User” with respect to the Restricted Site Material). You represent 
                                    and warrant that you are an Authorized User of any Restricted Site Material that you access or use."
                            textbox4="You may view the Site for evaluation purposes. You may access and use the Services and the Site Material 
                                    only for your internal business purposes and not for further reproduction, publication or distribution, 
                                    and may only access and use Restricted Site Material with respect to which you are an Authorized User."
                            textbox5="You may not download, copy, reproduce, distribute, circulate, transmit, publish, broadcast, display, 
                                    sell, license, modify, create derivative works of or otherwise exploit any of the Site Material in any 
                                    manner and for any purpose whatsoever without the prior written consent of Sidebrief, provided that (a) 
                                    you can make a reasonable number of copies of Restricted Site Material for use by you and your employees, 
                                    contractors, advisors or agents (your “Representatives”) for your internal business purposes, (b) your 
                                    computer may temporarily store copies of such Site Material in RAM incidental to your accessing and 
                                    viewing those materials, (c) you may store files that are automatically cached by your Web browser 
                                    for display enhancement purposes, and (d) you may print one copy of a reasonable number of pages of 
                                    Site Material other than Restricted Site Material for your own personal, non-commercial use and not for 
                                    further reproduction, publication, or distribution."
                            textbox6="You are responsible for (i) ensuring that any of your Representatives that receive Site Material comply 
                                    with these Terms and (ii) for any breach of these Terms by your Representatives."
                            textbox7="If you are ordering any Services or accessing or using any Restricted Site Material, you represent and 
                                    warrant that neither you or any of your Representatives are a competitor of Sidebrief. You shall not, 
                                    directly or indirectly, permit any third party to use the Services or any Site Material or offer or use the 
                                    Services for the benefit of any third party, including in any computer service business, service bureau 
                                    arrangement, outsourcing or subscription service, time sharing or other participation arrangement. You 
                                    shall not develop, market, license or sell a product or service which appropriates or uses as source 
                                    material any Site Material."
                            textbox8="If you have ordered Services that include the right to access and use Restricted Site Material consisting 
                                    of a License or permit application, you right to use that License or permit application is limited to 
                                    opening the application, completing the application, saving the application, printing the application, and 
                                    making a reasonable number of copies of the application as required for filing the applicable License 
                                    application and your internal records in connection with such License transaction."
                            textbox9="Please note however, that while the features and functionality we have provided on the Site should enable 
                                    most users to be able to edit, print and save their License applications, Sidebrief cannot warrant that 
                                    any specific customer will be able to print, save or edit its License applications."
                        />

                        <AccordionBox
                            title="Information Provided by You"
                            textbox1="You acknowledge and agree that, in order for us to provide Services that you have ordered to you, you are 
                                    required to provide certain information, data, documentation and other content to us (such information, data, 
                                    documentation and other content provided directly or indirectly by you to us, including any modifications 
                                    thereto made by us at your request, “Your Content”)."
                            textbox2="You are solely responsible for the accuracy, completeness, quality, integrity, legality and sufficiency 
                                    of Your Content."
                            textbox3="You acknowledge and agree that performance of the Services you have ordered is dependent on the timely 
                                    provision of Your Content to Sidebrief and your completion of your other responsibilities and obligations 
                                    under these Terms, and that Sidebrief is relying upon Your Content in the performance of the Services, 
                                    including without limitation the preparation and completion of License applications, without any 
                                    verification by Sidebrief as to the accuracy, completeness, quality, integrity, legality or sufficiency 
                                    of Your Content."
                            textbox4="You represent and warrant that (a) you have obtained all rights and authority, including the necessary 
                                    consents from any affected third parties, to provide Your Content to Sidebrief in connection with the 
                                    Services and that Your Content, (b) Your Content, is accurate and complete and complies with all applicable 
                                    laws and regulations. You further agree to indemnify and hold harmless and (at our request) defend us and 
                                    our affiliates, officers, directors, employees, agents, and representatives from and against any claim, 
                                    liability, loss, damage, cost and expense, including reasonable without limitation attorneys’ fees), 
                                    that directly or indirectly are caused by or arise out of Your Content."
                        />

                        <AccordionBox
                            title="User interaction and user content"
                            textbox1="You are solely responsible for your interactions with other users of the Site and Services. We reserve the 
                                    right, but have no obligation, to monitor disputes and interactions between you and other users. Sidebrief 
                                    shall have no liability for your interactions with other users, or for any user’s action or inaction."
                            textbox2="Some areas of the Services may allow users to post content such as profile or transaction information, comments, 
                                    questions, and other content or information (any such materials a user submits, posts, displays, or otherwise 
                                    makes available on the Services “User Content”). You retain ownership of your User Content."
                            textbox3="You agree not to post User Content that: (i) may create a risk of harm, loss, physical or mental injury, 
                                    emotional distress, death, disability, disfigurement, or physical or mental illness to you, to any other person, 
                                    or to any animal; (ii) may create a risk of any other loss or damage to any person or property; (iii) seeks to 
                                    harm or exploit children by exposing them to inappropriate content, asking for personally identifiable details or 
                                    otherwise; (iv) may constitute or contribute to a crime or tort; (v) contains any information or content that 
                                    we deem to be unlawful, harmful, abusive, racially or ethnically offensive, defamatory, infringing, invasive 
                                    of personal privacy or publicity rights, harassing, humiliating to other people (publicly or otherwise), libelous, 
                                    threatening, profane, or otherwise objectionable; (vi) contains any information or content that is illegal 
                                    (including, without limitation, the disclosure of insider information under securities law or of another party’s 
                                    trade secrets); (vii) contains any information or content that you do not have a right to make available under 
                                    any law or under contractual or fiduciary relationships; or (viii) contains any information or content that you 
                                    know is not correct and current. You agree that any User Content that you post does not and will not violate 
                                    third-party rights of any kind, including without limitation any Intellectual Property Rights (as defined below), 
                                    rights of publicity and privacy. You acknowledge and agree that any User Content that you post may be displayed 
                                    and disclosed to other users as permitted through the functionality of the Services. Sidebrief reserves the right, 
                                    but is not obligated, to edit, remove, re-categorize, pre-screen, reject and/or otherwise modify any User Content 
                                    that Sidebrief believes, in its sole discretion, violates these provisions"
                            textbox4="“Intellectual Property Rights” means all patent rights, copyright rights, mask work rights, moral rights, rights 
                                    of publicity, trademark, trade dress and service mark rights, goodwill, trade secret rights and other intellectual 
                                    property rights as may now exist or hereafter come into existence, and all applications therefore and registrations, 
                                    renewals and extensions thereof, under the laws of any state, country, territory or other jurisdiction."
                            textbox5="Your User Content and Sidebrief’s use thereof as contemplated by these terms of service and the Services will 
                                    not violate any law or infringe any rights of any third party, including but not limited to any Intellectual 
                                    Property Rights and privacy rights."
                            textbox6="Sidebrief may exercise the rights to your User Content granted under these terms of service without liability 
                                    for payment of any guild fees, residuals, payments, fees, or royalties payable under any collective bargaining 
                                    agreement or otherwise."
                            textbox7="To the best of your knowledge, all your User Content and other information that you provide to us is truthful and accurate."
                            textbox8="Sidebrief takes no responsibility and assumes no liability for any User Content that you or any other user or third-party posts or sends over the Services."
                            textbox9="You shall be solely responsible for your User Content and the consequences of posting or publishing it, and 
                                    you agree that we are only acting as a passive conduit for your online distribution and publication of your User Content."
                            textbox10="You understand and agree that you may be exposed to User Content that is inaccurate, objectionable, 
                                    inappropriate for children, or otherwise unsuited to your purpose, and you agree that Sidebrief shall 
                                    not be liable for any damages you may incur as a result of User Content."
                            textbox11="By posting any User Content on the Services, you expressly grant, and you represent and warrant that you 
                                    have a right to grant, to Sidebrief a royalty-free, sublicensable, transferable, perpetual, irrevocable, 
                                    non-exclusive, worldwide license to use, reproduce, modify, publish, list information regarding, edit, translate, 
                                    distribute, syndicate, publicly perform, publicly display, and make derivative works of all such User Content 
                                    and your name, voice, and/or likeness as contained in your User Content, in whole or in part, and in any form, 
                                    media or technology, whether now known or hereafter developed, for use in connection with the Services."
                            textbox12="You also hereby grant each user of the Services a non-exclusive license to access your User Content through 
                                    the Services, and to use, reproduce, distribute, display and perform such User Content as permitted through the 
                                    functionality of the Services and under this terms of service."
                            textbox13="The above licenses granted by you in your User Content terminate within a commercially reasonable time after 
                                    you remove or delete your User Content from the Services. We may retain and use your User Content as necessary 
                                    to comply with our legal obligations, resolve disputes, and enforce our agreements. Consistent with these 
                                    requirements, we will try to delete your User Content quickly upon request. Please note, however, that there 
                                    might be latency in deleting User Content from our servers and backed-up versions might exist after deletion. 
                                    In addition, we do not delete User Content from our servers that you have in common with other users."
                        />

                        <AccordionBox
                            title="Sidebrief grants you a limited license"
                            textbox1="Subject to your compliance with the terms and conditions of this terms of service, you are hereby granted a 
                                    non-exclusive, limited, non-transferable, freely revocable license to use the Services as designed. Sidebrief 
                                    reserves all rights not expressly granted herein in the Services and the Sidebrief Content (as defined below). 
                                    Sidebrief may terminate this license at any time for any reason or no reason."
                        />

                        <AccordionBox
                            title="Outbound Linking Policy Statement"
                            textbox1="Any link used on this Site is provided for your convenience.The appearance of a link does not constitute an 
                                    endorsement, recommendation or certification by Sidebrief of the linked website or resources or the entities, 
                                    businesses, products or services to which the link relates. We have no control over the contents of those 
                                    websites or resources and accept no responsibility for them or for any loss or damage that may arise from 
                                    your use of them."
                            textbox2="If you decide to access any of the third-party websites or resources linked to this Site, you do so entirely 
                                    at your own risk and subject to the terms and conditions of use for such websites or resources."
                        />

                        <AccordionBox
                            title="Restrictions on Use of Site"
                            textbox1="You may use the Site only or lawful purposes and in accordance with these Terms. You agree not to: (a) use 
                                    the Site in any way that violates any applicable federal, state, local, or international law or regulation; 
                                    (b) engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of the Site, or which, as 
                                    determined by us, may harm the Company or users of the Site or expose them to liability; (c) use the Site in 
                                    any manner that could disable, overburden, damage, or impair the site or interfere with any other party’s use 
                                    of the Site, including their ability to engage in real time activities through the Site; (d) use any robot, 
                                    spider, or other automatic device, process, or means to access the Site for any purpose, including monitoring 
                                    or copying any of the material on the Site; (e) use any manual process to monitor or copy any of the material 
                                    on the Site for any purpose not expressly permitted under these Terms without our prior written consent; (f) 
                                    use any device, software, or routine that interferes with the proper working of the Site; (g) introduce any 
                                    viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful; 
                                    (h) attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Site, the server 
                                    on which the Site is stored, or any server, computer, or database connected to the Site; (i) attack the Site via a 
                                    denial-of-service attack or a distributed denial-of-service attack; or (j) otherwise attempt to interfere with 
                                    the proper working of the Site."
                        />

                        <AccordionBox
                            title="Intellectual Property"
                            textbox1="The Site, the Site Material and all software and other technology used by Sidebrief to provide the Site, the 
                                    Services and the Site Material and all associated intellectual property rights (“Sidebrief Technology”) are owned 
                                    by the Sidebrief and its licensors and are protected by international copyright, trademark, patent, trade secret, 
                                    and other intellectual property or proprietary rights laws. Your rights to access and use the Site, the Services 
                                    and the Site Material are licensed, not sold to you."
                            textbox2="Nothing contained herein or in the Site, the Services or the Site Material is intended to grant, nor shall these 
                                    Terms, the Site, the Services or any Site Material be construed as granting by implication, estoppel or otherwise, 
                                    any license or right of use to any Sidebrief Technology, except the limited rights to access and use the Site, the 
                                    Services and the Site Material expressly granted to you hereunder."
                            textbox3="Except to the extent such prohibition is void under applicable law, you may not decompile, disassemble, attempt 
                                    to derive the source code of, reverse engineer the Sit or any of the Sidebrief Technology."
                            textbox4="You agree that you will not remove, obscure or alter any proprietary rights notices (including copyright and 
                                    trademark notices) which may be affixed to or contained within the Site, the Services or any Site Material."
                            textbox5="Certain business names, logos, product and service names, designs, and slogans on the Site or in the Site Material 
                                    are trademarks of Sidebrief or its affiliates and the other business names, logos, product and services names, 
                                    designs and slogans on the Site and in the Site Material are trademarks of their respective owners. You must not 
                                    any use such marks without the prior written permission of Sidebrief or the respective owner."
                        />

                        <AccordionBox
                            title="GENERAL DISCLAIMER OF WARRANTIES"
                            textbox1="YOU EXPRESSLY UNDERSTAND AND AGREE THAT USE OF THE SITE, THE SERVICES AND THE SITE MATERIAL IS AT YOUR SOLE RISK 
                                    AND THAT THE SITE, THE SERVICES AND THE SITE MATERIAL ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS AND WITHOUT 
                                    WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE AND OUR SUPPLIERS AND LICENSORS EXPRESSLY DISCLAIM 
                                    ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF 
                                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT, OR ANY WARRANTY ARISING FROM A COURSE OF 
                                    DEALING, PERFORMANCE, OR TRADE USAGE."
                            textbox2="SIDEBRIEF IS NOT ENGAGED IN RENDERING LEGAL, ACCOUNTING, FINANCIAL TAX OR OTHER PROFESSIONAL ADVICE OR SERVICES. 
                                    THE SERVICES DO NOT INCLUDE THE PROVISION OF LEGAL, ACCOUNTING, FINANCIAL TAX OR OTHER PROFESSIONAL ADVICE AND SHOULD 
                                    NOT BE RELIED UP ON AS SUCH. IF ANY SUCH PROFESSIONAL ADVICE IS REQUIRED, WE URGE YOU TO CONSULT WITH APPROPRIATE 
                                    ADVISORS. BLL SHALL IN NO WAY BE CONSTRUED AS A “PREPARER” OF ANY TAX OR LICENSE RELATED DOCUMENTS."
                            textbox3="SIDEBRIEF AND ITS SUPPLIERS AND LICENSORS CANNOT AND DO NOT ACCEPT ANY LIABILITY FOR DELAYS, ERRORS OR OMISSIONS IN 
                                    THE INFORMATION PROVIDED BY LICENSING AUTHORITIES OR OTHER GOVERNMENTAL OR THIRD-PARTY INFORMATION PROVIDERS OR THEIR 
                                    FILING OR RECORDING SYSTEMS. SIDEBRIEF AND ITS SUPPLIERS AND LICENSORS EXPRESSLY DISCLAIM ALL LIABILITY FOR PENALTIES, 
                                    FEES OR INTEREST ARISING OUT OF OR RELATING TO THE PREPARATION OR FILING, OR FAILURE OR DELAY IN FILING, OF ANY TAX OR 
                                    LICENSE DOCUMENT."
                            textbox4="NO THIRD-PARTY MAY RELY ON OR BENEFIT FROM THE SERVICES IN ANY MANNER, FOR ANY PURPOSE, AND YOU SHALL BE RESPONSIBLE 
                                    FOR ALL DAMAGES, LOSSES, PENALTIES, COSTS, EXPENSES, FEES AND OTHER LIABILITIES ARISING FROM OR RELATED TO ANY SUCH 
                                    UNAUTHORIZED RELIANCE."
                            textbox5="Applicable law may not allow the disclaimer or exclusion of certain implied warranties or statutory rights, so the 
                                    foregoing disclaimers and limitations may not apply to you. To the extent that in a particular circumstance any 
                                    disclaimer or limitation set forth in this Section is prohibited by applicable law or held to be unenforceable, then 
                                    the above disclaimers and limitations will to the fullest extent permitted by applicable law in that particular 
                                    circumstance."
                        />

                        <AccordionBox
                            title="LIMITATIONS OF LIABILITY"
                            textbox1="IN NO EVENT WILL WE OR ANY OF OUR SUPPLIERS OR LICENSORS BE LIABLE (JOINTLY OR SEVERALLY) TO YOU OR ANY OTHER PERSON 
                                    AS A RESULT OF YOUR ACCESS TO OR USE OF THE SITE, THE SERVICES OR THE SITE MATERIAL FOR INDIRECT, INCIDENTAL, SPECIAL, 
                                    CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, 
                                    USE, DATA OR OTHER INTANGIBLE LOSSES, REGARDLESS OF THE THEORY OF LIABILITY AND EVEN IF WE OR OUR INFORMATION SUPPLIES 
                                    HAVE BEEN ADVISED OF THE POSSIBILITY OR COULD HAVE FORESEEN SUCH DAMAGES, AND IRRESPECTIVE OF ANY FAILURE OF AN ESSENTIAL 
                                    PURPOSE OF A LIMITED REMEDY."
                            textbox2="WITHOUT LIMITING THE FOREGOING, THE LIABILITY OF SIDEBRIEF AND OUR SUPPLIERS AND LICENSORS UNDER THESE TERMS SHALL 
                                    NOT EXCEED (A) IN THE AGGREGATE THE AMOUNTS PAID BY YOU TO SIDEBRIEF FOR ACCESS TO OR USE OF THE SITE, THE SERVICES OR 
                                    ANY SITE MATERIAL IN THE 3-MONTH PERIOD IMMEDIATELY PRECEDING THE FIRST CLAIM HEREUNDER AND (B) WITH RESPECT TO ANY 
                                    ORDER FOR SERVICES, THE AMOUNT PAID BY YOU TO SIDEBRIEF FOR SUCH SERVICES."
                            textbox3="Applicable law may not allow the limitation or exclusion of certain damages or liability, so the foregoing limitations 
                                    may not apply to you. To the extent that in a particular circumstance any limitation on damages or liability set forth 
                                    in this Section is prohibited by applicable law or held to be unenforceable, then above limitations on damages and liability 
                                    will apply to the maximum extent permitted by applicable law in that particular circumstance."
                        />

                        <AccordionBox
                            title="Indemnification"
                            textbox1="You agree to indemnify and hold harmless and (at our request) defend us and our affiliates, officers, directors, employees, 
                                    agents, and representatives from and against any claim, liability, loss, damage, cost and expense, including reasonable 
                                    without limitation attorneys’ fees), that directly or indirectly are caused by or arise out of your use of the Site or any 
                                    Service or Site Material, your violation of these Terms, or your violation of any rights of another person or entity."
                        />

                        <AccordionBox
                            title="Termination"
                            textbox1="You may discontinue your use of the Site or the Services at any time; provided that you will not be entitled to any refund 
                                    for any Services you have ordered hereunder. You may terminate an order for Services only if we are in material breach of 
                                    these Terms and have failed to take good faith steps to cure such breach within thirty (30) days after receipt of notice 
                                    from you specifying such breach in reasonable detail. You agree that we may, without notice, at any time terminate an order 
                                    for Services or terminate or suspend your access to or use of the Site or any or all Services or Site Material without 
                                    liability to your or any third party in circumstances where we believe you to be in violation of any part of these Terms, 
                                    that you have engaged in behavior that infringes or violates any of our or a third party’s intellectual property or other 
                                    rights or that your use of the Site or any or all Services or Site Material (a) poses a threat to the security or operation 
                                    of the Site and/or our systems, (b) exposes Sidebrief to potential liability or damage, or (c) would violate any law, 
                                    regulation court order or government request or would cause compliance with any of the foregoing to be unduly restrictive or 
                                    burdensome to Sidebrief. When we terminate an order for Services or your access to the Site or any or all Services or Site 
                                    Material all related rights and licenses granted to you hereunder will immediately terminate, and you will cease all use of 
                                    the Site, the Services and the Site Material or the portions thereof that we have terminated or suspended. You are responsible 
                                    for payment for all Services provided prior to any suspension or termination, and for any Services ordered prior to suspension 
                                    or termination if such order has not terminated in accordance with these Terms."
                        />

                        <AccordionBox
                            title="Force Majeure"
                            textbox1="Sidebrief shall not be liable to the extent its performance under these Terms is prevented, hindered or delayed due to any 
                                    cause beyond its reasonable control, such as acts of God, fire, flood, earthquake or other natural disaster, acts of any 
                                    government, (irrespective of Business License’s condition of any preparedness therefore), war, embargo, riot, acts of terrorism, 
                                    strike or other labor action, power failures, equipment failure, acts of third parties, failure of third party products or services, 
                                    or interruption of internet, mobile or other communication method."
                        />

                        <AccordionBox
                            title="Governing Law and Venue"
                            textbox1="These Terms shall be governed by and construed in accordance with the laws of the countries we are incorporated to provide the 
                                    Service or the Federal Republic of Nigeria, without regard to its conflicts of laws principles."
                        />

                        <AccordionBox
                            title="Limitation on Time to File Claims"
                            textbox1="ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OR THE SITE OR THE SERVICES MUST BE COMMENCED 
                                    WITHIN SIX (6) MONTHS AFTER THE CAUSE OF ACTION ACCRUES, OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED."
                        />

                        <AccordionBox
                            title="Miscellaneous Provisions"
                            textbox1="These Terms contain the entire understanding and agreement of the parties with respect to the matters contained herein and 
                                    supersedes any prior or contemporaneous understandings or agreements, whether written or oral, between the parties with 
                                    respect to such matters. If any provision of these Terms is found by a court having jurisdiction to decide on the matter 
                                    to be illegal or unenforceable, then that provision will be enforced to the maximum extent possible and the remaining provisions 
                                    of these Terms will continue in full force and effect. No term or provision of these Terms will be considered waived and no 
                                    breach excused except pursuant to a written waiver or consent signed by the party granting the waiver or consent. We reserve 
                                    the right to assign our rights and obligations under these Terms, however except with our prior written consent, you may not 
                                    assign any of your rights or obligations under these Terms. All rights and remedies of Sidebrief under these Terms are 
                                    cumulative and in addition to those at law and in equity."
                        />

                        <AccordionBox
                            title="Use of Sidebrief Services across the world"
                            textbox1="The Services are controlled and operated from the countries we operate in as stated on our website. Those who access 
                                    or use the Services from other jurisdictions do so at their own volition and are entirely responsible for compliance 
                                    with all applicable federal, state, and local laws and regulations, including import, export and re-export control 
                                    laws and regulations in their country."
                        />

                        <AccordionBox
                            title="This terms of service is assignable only by Sidebrief"
                            textbox1="This terms of service, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but 
                                    may be transferred or assigned by Sidebrief without restriction."
                            textbox2="This is our entire agreement and if any portion is deemed invalid, the remaining provisions are valid."
                            textbox3="This agreement, together with any amendments and any additional agreements you may enter into with Sidebrief in 
                                    connection with the Service, shall constitute the entire agreement between you and Sidebrief concerning the Services."
                            textbox4="If any provision of this Agreement is deemed invalid by a court of competent jurisdiction, the invalidity of such provision 
                                    shall not affect the validity of the remaining provisions of this Agreement, which shall remain in full force and effect."
                            textbox5="No waiver of any term of this terms of service shall be deemed a further or continuing waiver of such term or any 
                                    other term, and Sidebrief’s failure to assert any right or provision under this terms of service shall not constitute a 
                                    waiver of such right or provision."
                            textbox6="If you have any questions about this Terms of Engagement, please contact us at: policy@sidebrief.com."
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
                    <Text color="gray.700" fontWeight={700}> {props.title ? props.title : ""} </Text>
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <Text color="gray.700" fontSize={{ base:12, md:14 }} mb={2} fontWeight={500}> {props.altText ? props.altText : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox1 ? props.textbox1 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox2 ? props.textbox2 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox3 ? props.textbox3 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox4 ? props.textbox4 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox5 ? props.textbox5 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox6 ? props.textbox6 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox7 ? props.textbox7 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox8 ? props.textbox8 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox9 ? props.textbox9 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox10 ? props.textbox10 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox11 ? props.textbox11 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox12 ? props.textbox12 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox13 ? props.textbox13 : ""} </Text>
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


export default TermsOfService 
