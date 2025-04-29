import { useMediaQuery } from 'react-responsive'

const Responsive = (resObj) => {

    const isDesktop = useMediaQuery({ minWidth: 992 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    const isMobile = useMediaQuery({ maxWidth: 767 })

    if (isDesktop){
       return resObj['Desktop']
    }else if(isTablet){
        return resObj['Tablet']
    }else if(isMobile){
        return resObj['Mobile']
    }else{
        return resObj['Desktop']
    }

}

export default Responsive;