import React from "react";
import LegacySvg from "../../../components/Svg/LegacySvg";
import { LegacySvgProps } from "../../../components/Svg/types";

const Icon: React.FC<LegacySvgProps> = (props) => {
  return (
    <LegacySvg viewBox="-2.5 0 24 24" {...props}>
      <path d="M2.28594 0H16.7177C16.9438 0.0678094 17.1777 0.120017 17.3949 0.207029C18.4065 0.627087 19.0015 1.56982 19.0015 2.74838C19.0015 8.58 19.0015 14.4118 19.0015 20.2438C19.0015 20.311 19.0015 20.3782 19.0015 20.446C18.9581 21.8526 17.8257 22.9928 16.4315 22.9952C11.8147 23.0024 7.1973 23 2.5793 22.988C2.22356 22.9835 1.87277 22.9034 1.54986 22.7528C0.517449 22.2661 0.00748672 21.4194 0.00748672 20.266V5.39835C0.00748672 4.47002 -0.000844 3.54169 0.00748672 2.61336C0.0158174 1.68503 0.420454 0.93313 1.20295 0.435061C1.52606 0.229832 1.92415 0.14162 2.28594 0ZM9.52594 2.875C7.87129 2.875 6.21685 2.875 4.56261 2.875C3.57542 2.875 2.8679 3.5855 2.85541 4.58344C2.84946 5.0395 2.84946 5.49577 2.85541 5.95223C2.86671 6.93937 3.55757 7.66187 4.53643 7.66487C7.84571 7.67487 11.1546 7.67487 14.4631 7.66487C15.4437 7.66187 16.1346 6.94477 16.1483 5.95523C16.1542 5.52137 16.1483 5.08751 16.1483 4.65365C16.1435 3.5735 15.4509 2.8744 14.3768 2.8738L9.52594 2.875ZM5.70689 18.2431C5.94491 18.4904 6.15259 18.7124 6.36145 18.9314C6.43347 19.0129 6.52358 19.076 6.62441 19.1157C6.72524 19.1553 6.83394 19.1703 6.94163 19.1595C7.23201 19.1301 7.44504 18.9794 7.5462 18.701C7.59902 18.5717 7.61183 18.4293 7.58294 18.2926C7.55406 18.1558 7.48483 18.0311 7.38434 17.9347C7.16239 17.7073 6.9327 17.4882 6.6917 17.2518C6.9452 17.001 7.17429 16.7879 7.38732 16.5593C7.73245 16.1885 7.63367 15.619 7.19571 15.4053C7.06158 15.3379 6.90948 15.3158 6.76192 15.3422C6.61435 15.3687 6.47915 15.4424 6.37633 15.5524C6.1508 15.775 5.93658 16.0102 5.70451 16.2533C5.45816 15.9994 5.24692 15.7792 5.03329 15.5608C4.95989 15.4805 4.869 15.4186 4.7678 15.3799C4.66659 15.3411 4.55785 15.3266 4.45014 15.3375C4.31589 15.3451 4.18691 15.3928 4.07973 15.4747C3.97255 15.5566 3.89206 15.6689 3.84855 15.7972C3.79574 15.9227 3.78203 16.0614 3.80924 16.195C3.83645 16.3285 3.90329 16.4506 4.00088 16.5449C4.22641 16.7795 4.46621 16.9992 4.71851 17.244C4.47097 17.484 4.25378 17.6905 4.0461 17.9041C3.73489 18.2227 3.72002 18.6542 4.00266 18.9464C4.28531 19.2387 4.7316 19.2387 5.05293 18.92C5.26418 18.7088 5.46768 18.491 5.70689 18.2431ZM4.99283 12.2171C4.99283 12.3791 4.99283 12.5123 4.99283 12.645C4.99938 13.0896 5.28679 13.4077 5.68904 13.4173C6.0913 13.4269 6.4031 13.0968 6.41679 12.648C6.42036 12.5093 6.41679 12.3701 6.41679 12.2171C6.59531 12.2171 6.74407 12.2213 6.89283 12.2171C7.07092 12.2023 7.23703 12.1207 7.35836 11.9883C7.47968 11.856 7.54741 11.6827 7.54815 11.5025C7.5489 11.3222 7.48262 11.1483 7.36239 11.015C7.24217 10.8816 7.07674 10.7986 6.89878 10.7823C6.74526 10.7769 6.59174 10.7823 6.41322 10.7823C6.41322 10.5867 6.4275 10.4145 6.41322 10.2458C6.39904 10.06 6.31399 9.887 6.17595 9.76312C6.03791 9.63924 5.85762 9.57415 5.67298 9.58153C5.28976 9.60194 5.00711 9.89898 4.99402 10.3016C4.98926 10.4559 4.99402 10.6101 4.99402 10.7817C4.80896 10.7817 4.65425 10.7769 4.50013 10.7817C4.32265 10.7971 4.15729 10.8788 4.03649 11.0108C3.91569 11.1428 3.84818 11.3156 3.84721 11.4952C3.84624 11.6749 3.91188 11.8484 4.03125 11.9817C4.15062 12.115 4.31509 12.1986 4.49239 12.2159C4.64651 12.2225 4.80182 12.2171 4.99224 12.2171H4.99283ZM13.3093 12.4535C13.6871 12.4535 14.065 12.4565 14.4399 12.4535C14.8808 12.4487 15.1944 12.1535 15.2003 11.7496C15.2063 11.3458 14.8885 11.0229 14.4387 11.0193C13.6758 11.0133 12.913 11.0133 12.1501 11.0193C11.7074 11.0235 11.4057 11.3248 11.4051 11.7394C11.4045 12.1541 11.7086 12.4481 12.1513 12.4535C12.5387 12.4571 12.9237 12.4535 13.3087 12.4535H13.3093ZM13.295 16.7657C13.68 16.7657 14.0656 16.7693 14.4506 16.7657C14.8885 16.7603 15.2015 16.4609 15.2033 16.054C15.2051 15.6472 14.8933 15.3339 14.4559 15.3339C13.6859 15.3267 12.9157 15.3267 12.1454 15.3339C11.7044 15.3387 11.4051 15.646 11.4081 16.0612C11.4111 16.4765 11.7163 16.7573 12.159 16.7645C12.5393 16.7687 12.9165 16.7657 13.2944 16.7657H13.295ZM13.3075 19.1661C13.7002 19.1661 14.093 19.1763 14.4851 19.1661C14.907 19.1523 15.2081 18.8366 15.2033 18.4376C15.1986 18.0385 14.8885 17.7373 14.4655 17.7343C13.6875 17.7291 12.91 17.7291 12.1329 17.7343C12.0077 17.7364 11.8846 17.7663 11.7723 17.8219C11.6332 17.8958 11.5231 18.0151 11.4599 18.1603C11.3967 18.3054 11.3841 18.4679 11.4242 18.6212C11.4973 18.9302 11.7812 19.1559 12.1299 19.1643C12.5214 19.1757 12.9142 19.1685 13.3069 19.1679L13.3075 19.1661Z" />
    </LegacySvg>
  );
};

export default Icon;