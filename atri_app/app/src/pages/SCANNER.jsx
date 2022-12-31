import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useBACKDROUND_FELXCb, useFlex13Cb, useFlex14Cb, useFlex15Cb, useImage1Cb, useTextBox5Cb, useImage2Cb } from "../page-cbs/SCANNER";
import "../page-css/SCANNER.css";
import "../custom/SCANNER";

export default function Scanner() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const BACKDROUND_FELXProps = useStore((state)=>state["SCANNER"]["BACKDROUND_FELX"]);
const BACKDROUND_FELXIoProps = useIoStore((state)=>state["SCANNER"]["BACKDROUND_FELX"]);
const BACKDROUND_FELXCb = useBACKDROUND_FELXCb()
const Flex13Props = useStore((state)=>state["SCANNER"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["SCANNER"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex14Props = useStore((state)=>state["SCANNER"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["SCANNER"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex15Props = useStore((state)=>state["SCANNER"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["SCANNER"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Image1Props = useStore((state)=>state["SCANNER"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["SCANNER"]["Image1"]);
const Image1Cb = useImage1Cb()
const TextBox5Props = useStore((state)=>state["SCANNER"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["SCANNER"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const Image2Props = useStore((state)=>state["SCANNER"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["SCANNER"]["Image2"]);
const Image2Cb = useImage2Cb()

  return (<>
  <Flex2 className="p-SCANNER BACKDROUND_FELX bpt" {...BACKDROUND_FELXProps} {...BACKDROUND_FELXCb} {...BACKDROUND_FELXIoProps}>
<Flex2 className="p-SCANNER Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Image className="p-SCANNER Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Flex2>
<Flex2 className="p-SCANNER Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Image className="p-SCANNER Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
</Flex2>
<Flex2 className="p-SCANNER Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<TextBox2 className="p-SCANNER TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
</Flex2>
</Flex2>
  </>);
}
