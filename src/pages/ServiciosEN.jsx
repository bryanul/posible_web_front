import TopnavbarEN from "../comp/TopnavbarEN";
import * as React from "react";
import Cardserv from "../comp/Cardserv";
import {Container} from "@mui/material";
import {Divider} from "@nextui-org/react";
import BackgroundImage from "../comp/BackgroundImage";
import backn from "../foto/back.jpg";
import TopnavbarESP from "../comp/TopnavbarESP";
import Footerweb from "../comp/Footerweb";
import useTitle from "../comp/useTitle";
import {motion} from 'framer-motion'
const ServiciosEN = () => {
    const servicios = [
        "ATENCIÓN INFORMES TRADUCIR",
        "DESARROLLO Y GESTIÓN DE ENCUESTAS TRADUCIR",
        "ACTUALIZACIÓN DE BASES DE DATOS TRADUCIR",
        'CONFIRMACIÓN DE ASISTENCIA A EVENTOS TRADUCIR',
        'GENERACIÓN Y CONCERTACIÓN DE CITAS TRADUCIR',
        'FIDELIZACIÓN DE CLIENTES TRADUCIR',
        'OPERACIONES FULL FILMENT TRADUCIR',
        'OUTSOURCING DE PERSONAL (CAMPO - INHOUSE) TRADUCIR'
    ];
    const servicios2 = [
        {
            id : 1,
            title: "ATTENTION OF REPORTS",
            info: 'Reporting operations are one of the points that you should differentiate when you have a service, product or temporary transaction. You must always have staff available, solving doubts and giving information for something specific. In POSIBLE we have comprehensive services that cover these needs without having to hire additional staff for it, but we do it for you.'
        },
        {
            id : 2,
            title: "DEVELOPMENT AND MANAGEMENT OF INVESTIGATIONS\n",
            info: "When companies have a specific Target to meet in the development, maintenance or improvement of a product, good or service. In POSIBLE we can apply a survey or develop it from scratch to be applied in a market study, product analysis, consumer or studies of specific areas of a company, the surveys can be developed in a virtual or face-to-face way adapting to the customer's need."
        },
        {
            id : 3,
            title: "DATABASE UPDATE",
            info: 'Most companies with commercial purposes have their base banks which over time will need to be enriched or updated with current information which allows to a high percentage of effectiveness for them POSIBLE offers its varied management tools for the effective achievement of this need.'
        },
        {
            id : 4,
            title: 'CONFIRMATION OF ASSISTANCE TO EVENTS',
            info: 'If your company has events to develop or massive meetings and you need to the largest number of attendees. In POSIBLE we will manage an effective contact with these listed before and during the date of the event in order to confirm the receipt of the invitation, cover doubts about it, and will manage even on the event date so that the guests get their attendance without any delay in this way we will that your company has the result you are looking for.'
        },
        {
            id : 5,
            title: 'GENERATION AND CONCERTATION OF DATES',
            info: 'One of the main objectives of the commercial areas is to effective meetings with prospects or customers, for this POSIBLE will generate leads with the own bases of customers or on our bases, seeking as the main goal an effective meeting at the right date and time in this way the advisers will the opportunities in less time only oriented to results.'
        },
        {
            id : 6,
            title: 'CLIENT FIDELIZATION',
            info: 'In POSSIBLE we can tailor ourselves to your needs to maintain and recover your customers, we offer emotional services of great added value to fidelize customers, retain newcomers and to attract others new, we can offer personalized 24h and omnicanal care, considering that your customers are the most important we will always work with creativity, heart and care.'
        },
        {
            id: 7,
            title: 'OPERATIONS FULL FILMENT',
            info: 'If you have the need to manage some campaign that starts in the contact with customers to be able to offer them some product, applying validations and ending in the delivery of the same, POSIBLE can develop it from zero to effective delivery through processes and use of smart tools for a high-level operation.'
        },
        {
            id: 8,
            title: 'OUTSOURCING OF PERSONAL (CAMP - INHOUSE)',
            info: 'POSIBLE can cover all personnel needs with unique profiles for your different commercial, administrative, technological, etc, operations. We can deploy this staff where it is necessary to apply as field management, InHouse (in your facilities) or in our own. Operations can be temporary or permanent.'
        }
    ];

    useTitle('Services | -posible.')
    return (
        <div className='w-full'>
            <BackgroundImage image={backn} overlay>
                <TopnavbarEN/>
                <div style={{
                    position: 'relative',
                    color: 'white',
                    textAlign: 'center',
                    padding: '2rem',
                }}>
                    <motion.div animate={{y: 0}} transition={{duration: 1.5}} initial={{y: -100}}>
                        <h1 className='py-5 font-bold text-black'
                            style={{fontSize: '60px', textAlign: 'center'}}>our services</h1>
                    </motion.div>
                    <Container className=''>
                        <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                        <motion.div animate={{y: 0}} transition={{duration: 1.5}} initial={{y: 150}}>
                            <div className='grid md:grid-cols-4 pt-5 pb-3' style={{}}>
                                {servicios2.map((item, index) => (
                                    <Cardserv titulo={item.title} info={item.info}/>
                                ))}
                            </div>
                        </motion.div>
                    </Container>
                </div>
                <div className=''
                     style={{
                         position: 'relative',
                     }}>
                    <Footerweb/>
                </div>
            </BackgroundImage>
        </div>
    )
}
export default ServiciosEN