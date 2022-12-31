import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Dropdown } from "@atrilabs/react-component-manifests/src/manifests/Dropdown/Dropdown.tsx";
import { Step } from "@atrilabs/react-component-manifests/src/manifests/Step/Step.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useBACKGROUND_FLEXCb, useFlex8Cb, useFlex9Cb, useFlex10Cb, useFlex11Cb, useTextBox4Cb, useDropdown2Cb, useStep1Cb, useButton2Cb } from "../page-cbs/SLOT";
import "../page-css/SLOT.css";
import "../custom/SLOT";

export default function Slot() {
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

  const BACKGROUND_FLEXProps = useStore((state)=>state["SLOT"]["BACKGROUND_FLEX"]);
const BACKGROUND_FLEXIoProps = useIoStore((state)=>state["SLOT"]["BACKGROUND_FLEX"]);
const BACKGROUND_FLEXCb = useBACKGROUND_FLEXCb()
const Flex8Props = useStore((state)=>state["SLOT"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["SLOT"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Flex9Props = useStore((state)=>state["SLOT"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["SLOT"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Flex10Props = useStore((state)=>state["SLOT"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["SLOT"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Flex11Props = useStore((state)=>state["SLOT"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["SLOT"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const TextBox4Props = useStore((state)=>state["SLOT"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["SLOT"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const Dropdown2Props = useStore((state)=>state["SLOT"]["Dropdown2"]);
const Dropdown2IoProps = useIoStore((state)=>state["SLOT"]["Dropdown2"]);
const Dropdown2Cb = useDropdown2Cb()
const Step1Props = useStore((state)=>state["SLOT"]["Step1"]);
const Step1IoProps = useIoStore((state)=>state["SLOT"]["Step1"]);
const Step1Cb = useStep1Cb()
const Button2Props = useStore((state)=>state["SLOT"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["SLOT"]["Button2"]);
const Button2Cb = useButton2Cb()

  return (<>
  <Flex1 className="p-SLOT BACKGROUND_FLEX bpt" {...BACKGROUND_FLEXProps} {...BACKGROUND_FLEXCb} {...BACKGROUND_FLEXIoProps}>
<Flex1 className="p-SLOT Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Flex1 className="p-SLOT Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<TextBox1 className="p-SLOT TextBox4 bpt" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
<Dropdown className="p-SLOT Dropdown2 bpt" {...Dropdown2Props} {...Dropdown2Cb} {...Dropdown2IoProps}/>
</Flex1>
<Flex1 className="p-SLOT Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Step className="p-SLOT Step1 bpt" {...Step1Props} {...Step1Cb} {...Step1IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-SLOT Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Button1 className="p-SLOT Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex1>
</Flex1>
  </>);
}
