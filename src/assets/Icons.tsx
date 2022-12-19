import * as React from "react";

type Props = {
  active: boolean;
};

export const Checked = ({ fill, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 22 21"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 0.5C8.82441 0.5 6.69767 1.08649 4.88873 2.1853C3.07979 3.28412 1.66989 4.8459 0.83733 6.67316C0.00476609 8.50043 -0.213071 10.5111 0.211367 12.4509C0.635804 14.3907 1.68345 16.1725 3.22183 17.5711C4.76021 18.9696 6.72022 19.922 8.85401 20.3078C10.9878 20.6937 13.1995 20.4957 15.2095 19.7388C17.2195 18.9819 18.9375 17.7002 20.1462 16.0557C21.3549 14.4112 22 12.4778 22 10.5C22 7.84783 20.8411 5.3043 18.7782 3.42893C16.7153 1.55357 13.9174 0.5 11 0.5ZM10.56 14.6667L5.5 11.1583L7.1775 9.18333L10.2117 11.3333L14.3458 7.1L16.3992 8.76667L10.56 14.6667Z"
      fill={fill}
    />
  </svg>
);

export const Date = ({ fill, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 19 13"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.1125 8.8L14.75 10.6V0.5H13.4375V10.6L11.075 8.8L10.1562 9.5L14.0938 12.5L18.0312 9.5L17.1125 8.8Z"
      fill={fill}
    />
    <path
      d="M4.90625 0.5L0.96875 3.5L1.8875 4.2L4.25 2.4V12.5H5.5625V2.4L7.925 4.2L8.84375 3.5L4.90625 0.5Z"
      fill={fill}
    />
  </svg>
);

export const DefaultTaskImg = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_105_30)">
      <path
        d="M20 40.0001C31.0458 40.0001 40.0001 31.0458 40.0001 20C40.0001 8.95432 31.0458 0 20 0C8.95432 0 0 8.95432 0 20C0 31.0458 8.95432 40.0001 20 40.0001Z"
        fill="#67B8CB"
      />
      <path
        d="M31.1054 30.0086C31.1054 30.6143 30.6143 31.1057 30.0079 31.1057H9.99277C9.38702 31.1057 8.89598 30.6143 8.89598 30.0086V9.9931C8.89598 9.38711 9.38702 8.89598 9.99277 8.89598H30.0083C30.6146 8.89598 31.1057 9.38702 31.1057 9.9931V30.0086H31.1054Z"
        fill="#FFF4E4"
      />
      <path
        d="M30.044 26.901L9.94381 26.8862L9.97352 12.9272L30.0739 12.9421L30.044 26.901Z"
        fill="#DBF0F5"
      />
      <path
        d="M29.82 24.4049L27.1025 21.683C27.1025 21.683 26.3241 20.6787 25.5999 20.7188C24.9484 20.7551 24.1873 21.5706 24.0417 21.7322L23.1306 20.8192C23.1306 20.8192 22.2189 19.6413 21.3703 19.6893C20.5214 19.736 19.5083 20.9175 19.5083 20.9175L19.2289 21.1951L17.514 19.4777C17.514 19.4777 16.3926 18.0294 15.3508 18.0881C14.3082 18.1462 13.0618 19.598 13.0618 19.598L10.1715 22.4841L10.1709 26.6783L29.8169 26.6919L29.82 24.4049Z"
        fill="#6CC077"
      />
      <path
        d="M21.2383 16.4592C21.2408 16.4371 21.2563 16.4172 21.2557 16.3938C21.2557 16.036 20.8694 15.7461 20.3929 15.7454C20.33 15.7454 20.2751 15.7628 20.2151 15.7719C20.0726 15.5818 19.8118 15.4488 19.4995 15.4482C19.0955 15.4482 18.7747 15.6671 18.6989 15.9541C18.3067 16.0312 18.0111 16.2874 18.0105 16.6056C18.0105 16.9072 18.2732 17.1557 18.6335 17.2483C18.7564 17.5233 19.0905 17.7251 19.4982 17.7251C19.867 17.7257 20.181 17.5606 20.3279 17.3253C20.4236 17.3575 20.5259 17.3765 20.637 17.3765C21.0602 17.377 21.4038 17.1197 21.4044 16.8017C21.4035 16.6704 21.3353 16.5558 21.2383 16.4592Z"
        fill="#67B8CB"
      />
      <path
        d="M25.2734 17.2753C25.2703 17.2591 25.2598 17.2456 25.2598 17.2292C25.2604 16.975 25.5361 16.7697 25.8741 16.7697C25.9186 16.7697 25.958 16.782 25.9997 16.7889C26.1014 16.6538 26.2871 16.5587 26.5078 16.5587C26.7952 16.5593 27.0235 16.7153 27.0779 16.919C27.356 16.9752 27.5658 17.1571 27.5652 17.383C27.5652 17.5971 27.3776 17.7733 27.1224 17.8386C27.0356 18.0341 26.7968 18.1766 26.5076 18.1766C26.2448 18.1772 26.0228 18.0587 25.9179 17.8923C25.8507 17.9144 25.7767 17.928 25.6991 17.928C25.3975 17.9274 25.1537 17.7449 25.1543 17.519C25.153 17.4256 25.2026 17.344 25.2734 17.2753Z"
        fill="#67B8CB"
      />
    </g>
    <defs>
      <clipPath id="clip0_105_30">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const LogoutIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.10382 10.9091H13.6362C14.1383 10.9091 14.5453 10.5021 14.5453 10C14.5453 9.49794 14.1383 9.09091 13.6362 9.09091H3.10382L4.27921 7.91557C4.63424 7.5606 4.63424 6.98497 4.27921 6.62994C3.9243 6.27491 3.34867 6.27491 2.99358 6.62994L0.266485 9.35703C0.245394 9.37806 0.225515 9.40006 0.206606 9.42309C0.202 9.42872 0.198061 9.43478 0.193576 9.44054C0.179697 9.45818 0.166061 9.47588 0.153576 9.49454C0.149939 9.5 0.14697 9.50575 0.143394 9.51127C0.130909 9.53078 0.118667 9.55048 0.107636 9.57103C0.105515 9.57509 0.103758 9.57939 0.101636 9.58345C0.0901818 9.60569 0.0791515 9.62824 0.0695152 9.65151C0.068303 9.65436 0.0674545 9.65739 0.066303 9.6603C0.0564242 9.68478 0.0472727 9.70957 0.0395152 9.73509C0.0384848 9.7383 0.0379394 9.74163 0.0370303 9.74491C0.029697 9.76994 0.0229697 9.79521 0.0178182 9.82109C0.016303 9.82878 0.0156364 9.83672 0.0142424 9.84448C0.0104848 9.86594 0.00672727 9.88739 0.00460606 9.90927C0.00151515 9.93927 0 9.96957 0 10C0 10.0304 0.00151515 10.0607 0.00460606 10.0908C0.00672727 10.113 0.0106061 10.1346 0.014303 10.1562C0.0156364 10.1638 0.016303 10.1715 0.0178182 10.1789C0.0230303 10.205 0.029697 10.2305 0.0370909 10.2558C0.038 10.2588 0.0385455 10.2619 0.0394545 10.2649C0.0472727 10.2905 0.0564242 10.3156 0.0664242 10.3403C0.0675151 10.343 0.068303 10.3458 0.0694546 10.3485C0.0791515 10.3719 0.0902424 10.3946 0.101818 10.417C0.103818 10.4209 0.105515 10.425 0.107576 10.429C0.118727 10.4496 0.13103 10.4695 0.143697 10.4892C0.147091 10.4945 0.15 10.5002 0.153515 10.5054C0.166061 10.5241 0.179818 10.5419 0.193636 10.5596C0.198061 10.5653 0.202 10.5713 0.206545 10.5769C0.225515 10.5999 0.245394 10.6219 0.266424 10.643L2.99352 13.3701C3.17103 13.5476 3.4037 13.6364 3.63636 13.6364C3.86903 13.6364 4.1017 13.5476 4.27915 13.3701C4.63418 13.015 4.63418 12.4395 4.27915 12.0844L3.10382 10.9091Z"
      fill="#9333EA"
    />
    <path
      d="M12.5635 2.56358C10.082 2.56358 7.77328 3.79461 6.38753 5.85649C6.10753 6.27315 6.21831 6.838 6.63498 7.11806C7.05171 7.39806 7.6165 7.28739 7.89662 6.87061C8.94395 5.31212 10.6886 4.3817 12.5635 4.3817C15.6613 4.38176 18.1817 6.90206 18.1817 10C18.1817 13.0979 15.6613 15.6182 12.5635 15.6182C10.6941 15.6182 8.95232 14.692 7.90419 13.1406C7.62304 12.7245 7.05807 12.6152 6.64195 12.8962C6.22595 13.1773 6.1165 13.7424 6.39759 14.1584C7.78431 16.211 10.0893 17.4364 12.5635 17.4364C16.6639 17.4364 19.9999 14.1005 19.9999 10C19.9999 5.89952 16.6639 2.56358 12.5635 2.56358Z"
      fill="#9333EA"
    />
  </svg>
);

export const TodayIcon = ({
  fill,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 16.5C8.3 16.5 7.70833 16.2583 7.225 15.775C6.74167 15.2917 6.5 14.7 6.5 14C6.5 13.3 6.74167 12.7083 7.225 12.225C7.70833 11.7417 8.3 11.5 9 11.5C9.7 11.5 10.2917 11.7417 10.775 12.225C11.2583 12.7083 11.5 13.3 11.5 14C11.5 14.7 11.2583 15.2917 10.775 15.775C10.2917 16.2583 9.7 16.5 9 16.5ZM5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6C3 5.45 3.19567 4.97933 3.587 4.588C3.979 4.196 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.021 4.196 20.413 4.588C20.8043 4.97933 21 5.45 21 6V20C21 20.55 20.8043 21.021 20.413 21.413C20.021 21.8043 19.55 22 19 22H5ZM5 20H19V10H5V20Z"
      fill={fill}
    />
  </svg>
);

export const UserIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_10)">
      <path
        d="M11 6.5C11 7.29565 10.6839 8.05871 10.1213 8.62132C9.55871 9.18393 8.79565 9.5 8 9.5C7.20435 9.5 6.44129 9.18393 5.87868 8.62132C5.31607 8.05871 5 7.29565 5 6.5C5 5.70435 5.31607 4.94129 5.87868 4.37868C6.44129 3.81607 7.20435 3.5 8 3.5C8.79565 3.5 9.55871 3.81607 10.1213 4.37868C10.6839 4.94129 11 5.70435 11 6.5Z"
        fill="#7D40FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8.5C0 6.37827 0.842855 4.34344 2.34315 2.84315C3.84344 1.34285 5.87827 0.5 8 0.5C10.1217 0.5 12.1566 1.34285 13.6569 2.84315C15.1571 4.34344 16 6.37827 16 8.5C16 10.6217 15.1571 12.6566 13.6569 14.1569C12.1566 15.6571 10.1217 16.5 8 16.5C5.87827 16.5 3.84344 15.6571 2.34315 14.1569C0.842855 12.6566 0 10.6217 0 8.5V8.5ZM8 1.5C6.68178 1.50007 5.39037 1.87236 4.2744 2.57403C3.15844 3.27569 2.26328 4.27821 1.69196 5.46619C1.12065 6.65418 0.896386 7.97934 1.045 9.28916C1.19361 10.599 1.70905 11.8402 2.532 12.87C3.242 11.726 4.805 10.5 8 10.5C11.195 10.5 12.757 11.725 13.468 12.87C14.2909 11.8402 14.8064 10.599 14.955 9.28916C15.1036 7.97934 14.8794 6.65418 14.308 5.46619C13.7367 4.27821 12.8416 3.27569 11.7256 2.57403C10.6096 1.87236 9.31822 1.50007 8 1.5V1.5Z"
        fill="#7D40FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_10">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const AddTaskIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 0C4.98615 0 0.5 4.48577 0.5 10C0.5 15.5142 4.98615 20 10.5 20C16.0138 20 20.5 15.5142 20.5 10C20.5 4.48577 16.0138 0 10.5 0ZM15.3077 10.7692H11.2692V15C11.2692 15.4246 10.9246 15.7692 10.5 15.7692C10.0754 15.7692 9.73077 15.4246 9.73077 15V10.7692H5.69231C5.26769 10.7692 4.92308 10.4246 4.92308 10C4.92308 9.57539 5.26769 9.23077 5.69231 9.23077H9.73077V5.38462C9.73077 4.96 10.0754 4.61538 10.5 4.61538C10.9246 4.61538 11.2692 4.96 11.2692 5.38462V9.23077H15.3077C15.7323 9.23077 16.0769 9.57539 16.0769 10C16.0769 10.4246 15.7323 10.7692 15.3077 10.7692Z"
      fill="#9333EA"
    />
  </svg>
);

export const OptionsIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="4"
    height="14"
    viewBox="0 0 4 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 12C3.5 12.3978 3.34196 12.7794 3.06066 13.0607C2.77936 13.342 2.39782 13.5 2 13.5C1.60218 13.5 1.22064 13.342 0.93934 13.0607C0.658035 12.7794 0.5 12.3978 0.5 12C0.5 11.6022 0.658035 11.2206 0.93934 10.9393C1.22064 10.658 1.60218 10.5 2 10.5C2.39782 10.5 2.77936 10.658 3.06066 10.9393C3.34196 11.2206 3.5 11.6022 3.5 12ZM3.5 7C3.5 7.39782 3.34196 7.77936 3.06066 8.06066C2.77936 8.34196 2.39782 8.5 2 8.5C1.60218 8.5 1.22064 8.34196 0.93934 8.06066C0.658035 7.77936 0.5 7.39782 0.5 7C0.5 6.60218 0.658035 6.22064 0.93934 5.93934C1.22064 5.65804 1.60218 5.5 2 5.5C2.39782 5.5 2.77936 5.65804 3.06066 5.93934C3.34196 6.22064 3.5 6.60218 3.5 7ZM3.5 2C3.5 2.39782 3.34196 2.77936 3.06066 3.06066C2.77936 3.34196 2.39782 3.5 2 3.5C1.60218 3.5 1.22064 3.34196 0.93934 3.06066C0.658035 2.77936 0.5 2.39782 0.5 2C0.5 1.60218 0.658035 1.22064 0.93934 0.93934C1.22064 0.658035 1.60218 0.5 2 0.5C2.39782 0.5 2.77936 0.658035 3.06066 0.93934C3.34196 1.22064 3.5 1.60218 3.5 2Z"
      fill="#6B7280"
    />
  </svg>
);

export const EditIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.0917 4.45562L15.4675 4.10793L15.5622 4.02178L15.608 3.9787C15.6276 3.96024 15.6602 3.92947 15.6864 3.90178C15.7942 3.78794 15.8955 3.62794 15.9478 3.46795C15.9772 3.37872 15.9935 3.28026 15.9968 3.18795L16 3.07103C16 3.04026 15.9935 3.01257 15.9804 2.9818C15.9445 2.90796 15.8955 2.80027 15.8367 2.69566C15.7779 2.58797 15.706 2.48643 15.6537 2.4372C15.6374 2.41874 15.621 2.40335 15.6047 2.39412C15.5916 2.38489 15.5785 2.38182 15.5687 2.37874C15.5459 2.37259 15.5263 2.37566 15.5099 2.38182C15.4773 2.40028 15.4544 2.43105 15.4511 2.50797C15.4348 2.64335 15.4152 2.84334 15.4152 3.06488C15.4152 3.08026 15.4152 3.09565 15.4152 3.11103V3.12949C15.3858 3.22487 15.34 3.31718 15.2747 3.38795C15.2093 3.46179 15.1277 3.51102 15.0427 3.56641C14.8728 3.67717 14.7029 3.79409 14.533 3.91717C14.1899 4.16024 13.8436 4.41869 13.4973 4.69253C12.8013 5.23714 12.0989 5.83712 11.4127 6.45865C10.573 7.21556 9.7366 7.96939 8.8969 8.72629L7.62592 9.87088L7.31226 10.157L7.24038 10.2216C7.24038 10.2216 7.23384 10.2247 7.23058 10.2247L7.21097 10.2278L6.38108 10.3786C5.8093 10.4863 5.24079 10.5909 4.66901 10.6986L4.39455 10.7509C4.50564 10.2432 4.62 9.73242 4.73109 9.22474L4.90099 8.41553L4.94346 8.21246L4.96307 8.11092L4.96633 8.09861V8.09246V8.08938C4.9696 8.07708 4.96307 8.10477 4.96307 8.09861C4.96307 8.09246 4.9696 8.074 4.96633 8.08631C4.9598 8.10477 4.96307 8.09554 4.96307 8.09861C4.9598 8.09861 4.9696 8.08323 4.9696 8.08015L4.9794 8.07092L5.01861 8.034L5.09376 7.96015C5.50871 7.5817 5.92692 7.20633 6.34187 6.82787C7.65206 5.62482 8.96225 4.41562 10.2528 3.19411C10.8965 2.58181 11.5369 1.96644 12.1707 1.34799L12.4093 1.11415C12.4485 1.07415 12.4713 1.05261 12.4844 1.04031H12.4942C12.6053 1.04954 12.6968 1.05877 12.7687 1.07415C12.8046 1.08031 12.834 1.08646 12.8569 1.09569H12.8601C12.8536 1.09261 12.8732 1.10184 12.8503 1.09261H12.8536L12.8601 1.09569L12.8798 1.10184L12.919 1.11723L12.9974 1.148C13.0954 1.188 13.164 1.21569 13.2555 1.25876C13.4287 1.34184 13.592 1.43722 13.7489 1.54799C14.4546 2.03721 14.8565 2.71104 15.1113 2.53566C15.2191 2.45566 15.2518 2.23105 15.1473 1.90798C15.0427 1.58799 14.7911 1.16338 14.3337 0.797235C14.1311 0.634162 13.909 0.48955 13.677 0.366475C13.6182 0.335707 13.5528 0.304938 13.494 0.27417C13.4287 0.240324 13.3829 0.22494 13.3241 0.197248L13.2849 0.178787L13.2522 0.163403L13.2228 0.151096C13.1836 0.135711 13.1444 0.123404 13.1052 0.111096C13.0268 0.0895585 12.9549 0.0710973 12.883 0.0587899C12.8144 0.0464825 12.7458 0.0341751 12.6837 0.0249445L12.5922 0.0126371L12.54 0.00648337C12.5105 0.00340652 12.4811 0.000329663 12.4517 0.000329663C12.3341 -0.00274719 12.2034 0.0157139 12.0891 0.0557131C11.9747 0.0957122 11.8767 0.151096 11.8015 0.209556C11.7819 0.221863 11.7623 0.240324 11.7395 0.258786L11.6937 0.298785L11.6284 0.357245L11.4977 0.474165L11.2363 0.708006C10.5436 1.33261 9.85422 1.96644 9.17789 2.60643C8.08988 3.64025 7.01493 4.67715 5.93999 5.72328L4.33248 7.2894L4.22792 7.39094C4.16911 7.4494 4.1201 7.51093 4.07763 7.57555C4.03842 7.64016 4.00248 7.70785 3.97634 7.78785C3.94367 7.89246 3.94693 7.914 3.93386 7.96323L3.82278 8.4986L3.59733 9.56627C3.50585 9.88011 3.4111 10.194 3.31961 10.5109L3.251 10.7478L3.21832 10.8678L3.20199 10.9262C3.19545 10.957 3.18238 11.0093 3.17912 11.0524C3.15951 11.2339 3.21179 11.4678 3.37516 11.6432C3.45357 11.7293 3.55812 11.8001 3.66595 11.8431C3.77377 11.8862 3.88486 11.9078 3.99594 11.9108C4.02862 11.9108 4.06129 11.9108 4.09396 11.9078L4.14624 11.9016L4.16258 11.8985L4.20832 11.8924L4.24099 11.8862L4.36842 11.8647L4.62653 11.8247L5.1395 11.7416C5.48257 11.6831 5.82564 11.6247 6.1687 11.5662C6.51177 11.5047 6.85484 11.4432 7.1979 11.3816L7.45602 11.3355C7.60632 11.3078 7.78275 11.2432 7.92978 11.1478C7.96572 11.1232 8.00166 11.0985 8.03107 11.0739L8.08334 11.0309L8.11275 11.0032L8.2075 10.917L8.39374 10.7447C8.89037 10.2801 9.39027 9.81858 9.8869 9.35397C10.8769 8.41861 11.8669 7.48017 12.8569 6.5448C13.3535 6.07712 13.8501 5.60944 14.3435 5.14483L15.0917 4.45562ZM12.4354 1.03723C12.4256 1.03723 12.4158 1.03723 12.4125 1.03415L12.4354 1.03723ZM3.95347 10.837C3.93713 10.8401 3.95674 10.837 3.96654 10.8339C3.96981 10.8339 3.96981 10.8339 3.97307 10.8339L3.95347 10.837Z"
      fill="#8687E7"
    />
    <path
      d="M13.0986 8.65552C12.9385 8.4186 12.8046 8.72628 12.7033 9.18781C12.5334 9.9478 12.4125 10.7878 12.3308 11.6739C12.2883 12.117 12.2557 12.5724 12.2328 13.0308C12.2263 13.1447 12.223 13.2616 12.2165 13.3785L12.2099 13.5539V13.5754V13.5877C12.2099 13.5785 12.2099 13.6093 12.2099 13.5693V13.5723V13.5785L12.2067 13.6216C12.2034 13.6616 12.2001 13.6523 12.1969 13.6616C12.1707 13.7631 12.0858 13.8616 11.9845 13.9108C11.9191 13.9416 11.8603 13.9539 11.7754 13.9508L11.3245 13.9416L10.426 13.9231L8.62569 13.8862C7.42659 13.8646 6.22422 13.8462 5.02512 13.8246C3.82275 13.8093 2.62038 13.7969 1.41801 13.7969H1.40494H1.39187L1.33633 13.7939C1.33306 13.7877 1.35266 13.7939 1.33633 13.7908C1.31672 13.7877 1.30039 13.7785 1.28078 13.7723C1.24811 13.7539 1.21217 13.7262 1.19257 13.6954C1.1697 13.6646 1.15989 13.6277 1.15663 13.5877L1.15009 13.1631C1.14356 12.597 1.13376 12.0278 1.12069 11.4585C1.13376 10.8955 1.14356 10.3355 1.15663 9.77242C1.18277 7.98784 1.20237 6.20634 1.19583 4.42484L1.19257 3.78793C1.19257 3.72639 1.21544 3.6864 1.25791 3.6464C1.27752 3.62793 1.30366 3.61563 1.32979 3.6064C1.34286 3.60332 1.35593 3.60024 1.37227 3.59717C1.37554 3.59717 1.3788 3.59717 1.38207 3.59717C1.38207 3.59717 1.40821 3.59717 1.41801 3.59717H1.50623L2.21523 3.58794C3.15949 3.57255 4.10374 3.55101 5.04472 3.51717C6.1164 3.48025 7.00511 3.33871 6.92669 3.06179C6.85481 2.80641 6.09353 2.61873 4.99571 2.59103C4.00899 2.56642 3.01572 2.5418 2.02246 2.51719L1.64999 2.51104L1.46375 2.50796C1.42781 2.50796 1.40821 2.50488 1.36247 2.50796C1.31346 2.51104 1.26118 2.51104 1.21217 2.51719C0.810292 2.56027 0.434552 2.77872 0.215642 3.09872C0.160098 3.17871 0.114356 3.26487 0.0816827 3.35409C0.0457423 3.4464 0.0228711 3.52948 0.00653461 3.65255L0.00326731 3.69255V3.71409L0 3.75716V3.80332V3.82485V3.86793V4.04331V4.74483C0.00653461 6.24634 0.0261385 7.74784 0.0490096 9.24935L0.08495 11.5016L0.104554 12.6277L0.114356 13.1908L0.117623 13.4708V13.5416C0.117623 13.5662 0.117623 13.5816 0.12089 13.6216C0.124158 13.6923 0.13396 13.76 0.147029 13.8308C0.189504 14.08 0.320196 14.32 0.516234 14.4985C0.614254 14.5877 0.728609 14.6677 0.852767 14.7231C0.980192 14.7785 1.10108 14.8185 1.27752 14.84L1.34286 14.8462L1.3592 14.8492H1.40167L1.43435 14.8523L1.56831 14.8585L1.83623 14.8708L2.37533 14.8923C3.09414 14.92 3.81295 14.9415 4.53175 14.9569C5.97264 14.9877 7.42005 15 8.86747 15C9.59281 15 10.3182 14.9969 11.0402 14.9969L11.5826 14.9938H11.7198H11.795L11.9126 14.9877C12.0727 14.9723 12.2295 14.9354 12.3766 14.8769C12.6706 14.7538 12.9189 14.5446 13.0758 14.2831C13.1542 14.1508 13.2097 14.0123 13.2424 13.8616C13.2522 13.8154 13.2587 13.7723 13.262 13.7262C13.2653 13.6985 13.2653 13.6923 13.2653 13.68V13.6493L13.2685 13.5877V13.5569V13.4923C13.2653 12.1262 13.2653 10.7632 13.2849 9.40319C13.2947 9.15704 13.1803 8.77551 13.0986 8.65552Z"
      fill="#8687E7"
    />
  </svg>
);

export const DeleteIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="18"
    height="15"
    viewBox="0 0 18 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9123 7.36051L14.1708 4.77626H14.623C14.9652 4.77626 15.2427 4.54505 15.2427 4.2599V3.31758C15.2427 2.42889 14.375 1.70586 13.3086 1.70586H11.1532V1.46732C11.1532 0.658182 10.3633 0 9.39241 0H7.58514C6.61423 0 5.82441 0.658182 5.82441 1.46727V1.70581H3.66902C2.60259 1.70581 1.73495 2.42884 1.73495 3.31752V4.25985C1.73495 4.545 2.01241 4.77621 2.35459 4.77621H2.80683L3.64877 13.197C3.74986 14.208 4.78277 15 6.00023 15H10.9771C12.1801 15 13.2023 14.2266 13.324 13.2328C15.0006 12.9446 16.265 11.7049 16.265 10.2237C16.2651 8.92167 15.2876 7.80702 13.9123 7.36051ZM7.06368 1.46727C7.06368 1.22768 7.29762 1.03273 7.58514 1.03273H9.39241C9.67999 1.03273 9.91393 1.22768 9.91393 1.46727V1.70581H7.06368V1.46727ZM2.97411 3.74359V3.31758C2.97411 2.99828 3.2858 2.73854 3.66895 2.73854H13.3085C13.6917 2.73854 14.0034 2.99828 14.0034 3.31758V3.74359H2.97411ZM10.9772 13.9673H6.00029C5.42223 13.9673 4.9318 13.5913 4.8838 13.1112L4.05029 4.77626H12.9272L12.6894 7.15384C12.6524 7.15293 12.6155 7.15146 12.5782 7.15146C10.5453 7.15146 8.8915 8.5297 8.8915 10.2237C8.8915 11.7716 10.2724 13.055 12.0614 13.2652C11.9359 13.6692 11.4917 13.9673 10.9772 13.9673ZM12.5782 12.2633C11.2287 12.2633 10.1307 11.3484 10.1307 10.2237C10.1307 9.09909 11.2287 8.18414 12.5782 8.18414C13.9278 8.18414 15.0257 9.09909 15.0257 10.2237C15.0257 11.3484 13.9278 12.2633 12.5782 12.2633Z"
      fill="#F56497"
    />
    <path
      d="M13.4547 10.2238L14.0389 9.73693C14.2808 9.53527 14.2808 9.2083 14.0388 9.00668C13.7967 8.80506 13.4045 8.80506 13.1625 9.00668L12.5782 9.49355L11.994 9.00668C11.7519 8.80506 11.3597 8.80506 11.1177 9.00668C10.8757 9.20835 10.8757 9.53527 11.1177 9.73693L11.7019 10.2238L11.1177 10.7107C10.8757 10.9123 10.8757 11.2393 11.1177 11.4409C11.2387 11.5417 11.3973 11.5921 11.5559 11.5921C11.7145 11.5921 11.873 11.5417 11.9941 11.4409L12.5783 10.9541L13.1625 11.4409C13.2836 11.5417 13.4421 11.5921 13.6007 11.5921C13.7593 11.5921 13.9179 11.5417 14.0389 11.4409C14.2809 11.2393 14.2809 10.9123 14.0389 10.7107L13.4547 10.2238Z"
      fill="#F56497"
    />
  </svg>
);

export const Unchecked = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 0C4.03741 0 0 4.03741 0 9C0 13.9626 4.03741 18 9 18C13.9626 18 18 13.9626 18 9C17.9997 4.03741 13.9626 0 9 0ZM9 16.5494C4.8372 16.5494 1.45061 13.1628 1.45061 8.99968C1.45061 4.83688 4.8372 1.45029 9 1.45029C13.1628 1.45029 16.5494 4.8372 16.5494 9C16.5494 13.1628 13.1628 16.5494 9 16.5494Z"
      fill="#8687E7"
    />
  </svg>
);

export const CheckedCheckbox = ({
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_111_209)">
      <path
        d="M9 0C4.03741 0 0 4.03741 0 9C0 13.9626 4.03741 18 9 18C13.9626 18 18 13.9626 18 9C17.9997 4.03741 13.9626 0 9 0ZM9 16.5494C4.83721 16.5494 1.45061 13.1628 1.45061 8.99968C1.45061 4.83688 4.83721 1.45029 9 1.45029C13.1628 1.45029 16.5494 4.83721 16.5494 9C16.5494 13.1628 13.1628 16.5494 9 16.5494Z"
        fill="#8687E7"
      />
      <path
        d="M11.8689 6.13009L7.66798 10.3313L6.13077 8.79413C5.84769 8.51073 5.3885 8.51073 5.10542 8.79413C4.82202 9.07721 4.82202 9.5364 5.10542 9.81948L7.15547 11.8695C7.29701 12.0111 7.48282 12.0822 7.66831 12.0822C7.85379 12.0822 8.03928 12.0114 8.18082 11.8695L12.8946 7.15577C13.1777 6.87237 13.1777 6.41349 12.8946 6.13009C12.6112 5.84702 12.1523 5.84702 11.8689 6.13009Z"
        fill="#8687E7"
      />
    </g>
    <defs>
      <clipPath id="clip0_111_209">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const CloseIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_111_402)">
      <path
        d="M19.5711 4.92995C15.6722 1.03108 9.32809 1.0308 5.42894 4.92995C1.52979 8.8291 1.53006 15.1732 5.42894 19.0721C9.32782 22.971 15.6719 22.9712 19.5711 19.0721C23.4702 15.1729 23.47 8.82883 19.5711 4.92995ZM15.3556 15.9445L12.5 13.0889L9.5084 16.0805C9.20815 16.3807 8.72079 16.3807 8.42055 16.0805C8.1203 15.7802 8.1203 15.2929 8.42055 14.9926L11.4122 12.001L8.55653 9.1454C8.25628 8.84515 8.25628 8.35779 8.55653 8.05754C8.85678 7.75729 9.34414 7.75729 9.64438 8.05754L12.5 10.9132L15.2196 8.19352C15.5199 7.89328 16.0073 7.89328 16.3075 8.19352C16.6078 8.49377 16.6078 8.98113 16.3075 9.28138L13.5879 12.001L16.4435 14.8566C16.7437 15.1569 16.7437 15.6443 16.4435 15.9445C16.1432 16.2448 15.6559 16.2448 15.3556 15.9445Z"
        fill="#6B7280"
      />
    </g>
    <defs>
      <clipPath id="clip0_111_402">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
