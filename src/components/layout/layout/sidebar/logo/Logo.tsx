import { FC } from "react";

const Logo: FC = () => {
  return (
    <div className="w-16 h-16 inline-block">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
      >
        <g id="Layer_2">
          <path
            d="M18.819843,38.027779h48.402218c2.474319,0,4.608177,1.738331,5.108444,4.161541l7.985153,38.678768
                  c0.66819,3.23658-1.803604,6.270798-5.108444,6.270798H64.081757c-1.871861,0-3.600204-1.002991-4.528908-2.628227
                  l-4.942593-8.649544l-29.90411-0.043152c-2.454649-0.00354-4.574699-1.718025-5.091656-4.117622l-5.893827-27.357853
                  C13.020789,41.093834,15.496654,38.027779,18.819843,38.027779z"
            fill="#5969F1"
          />
          <path
            d="M83.290413,62.583332H34.888191c-2.474316,0-4.608177-1.738327-5.108444-4.161541l-7.985153-38.678772
                  c-0.668186-3.23658,1.80361-6.270799,5.108444-6.270799H38.0285c1.871857,0,3.600204,1.002997,4.528904,2.628228L47.5,24.75
                  l29.904106,0.043148c2.454651,0.003542,4.574699,1.718027,5.09166,4.117626l5.893829,27.357849
                  C89.089462,59.517281,86.613602,62.583332,83.290413,62.583332z"
            fill="#F9F7F7"
          />
        </g>
      </svg>
    </div>
  );
};
export default Logo;
