import React from 'react';
import "./fullpage.scss";
import {useTranslation} from "react-i18next";

export default function FullItemPage({fullPage}) {
  const {t} = useTranslation();
  return (
    <div className='fullPage'>
      <div className='fullPageContent'>
      <div className='fullPageLeft'>
          <img src={fullPage.imgUrl} />
      </div>
      <div className='fullPageRight'>
        <h2> {fullPage.name} </h2>
        <hr />
        <h3>{t("General.description")}</h3>
        <h2>{t("General.general")}</h2>
        <hr />
        <h5>{t("General.warranty")}: <span>{fullPage.General.warranty}</span></h5>
        <h5>{t("General.year")} : <span>{fullPage.General.announcementYear}</span></h5>
        <h5>{t("General.os")} : <span>{fullPage.General.OperationSystem}</span></h5>
        <h2>{t("Display.display")}</h2>
        <hr />
        <h5>{t("Display.screenType")}: <span>{fullPage.Display.screenType}</span></h5>
        <h5>{t("Display.screenResolution")} : <span>{fullPage.Display.ScreenResolution}</span></h5>
        <h5>{t("Display.screenSize")} : <span>{fullPage.Display.ScreenSize}</span></h5>
        <h2>{t("Camera.camera")}</h2>
        <hr />
        <h5>{t("Camera.frontCamera")} : <span>{fullPage.Camera.FrontCamera}</span></h5>
        <h5>{t("Camera.mainCamera")} : <span>{fullPage.Camera.MainCamera}</span></h5>
        <h2>{t("Memory.m")}</h2>
        <hr />
        <h5>{t("Memory.processor")}: <span>{fullPage.Memory.Chipset}</span></h5>
        <h5>{t("Memory.CPU")} : <span>{fullPage.Memory.CPU}</span></h5>
        <h5>{t("Memory.cardSlot")} : <span>{fullPage.Memory.CardSlot}</span></h5>
        <h5>{t("Memory.RAM")} : <span>{fullPage.Memory.Ram}</span></h5>
        <h5>{t("Memory.memory")} : <span>{fullPage.Memory.Memory}</span></h5> 
        <h2>{t("Other.other")}</h2>
        <hr />
        <h5>{t("Other.weight")} : <span>{fullPage.Other.Weight}</span></h5>
        <h5>{t("Other.thickness")} : <span>{fullPage.Other.Тhickness}</span></h5>
        <h5>{t("Other.height")} :<span> {fullPage.Other.Height}</span></h5>
        <h5>{t("Other.width")} : <span> {fullPage.Other.Width}</span></h5>
        
      </div>
      </div>
    </div>
  )
}


