/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow strict */

import React from 'react';
import { cssModules } from 'bpk-react-utils';

import STYLES from './AirlineLogo.scss';

const getClassNames = cssModules(STYLES);

const AirlineLogo = () => (
  <span>
    <svg
      width="110px"
      height="13px"
      viewBox="0 0 110 13"
      xmlns="http://www.w3.org/2000/svg"
      className={getClassNames('bpk-airline-logo')}
    >
      <path d="M28.412,7.584 L31.372,7.584 L29.932,3.392 L29.9,3.392 L28.412,7.584 Z M28.652,0.576 L31.228,0.576 L35.5,12 L32.892,12 L32.028,9.456 L27.756,9.456 L26.86,12 L24.332,12 L28.652,0.576 Z M38.588,2.448 L36.316,2.448 L36.316,0.576 L38.588,0.576 L38.588,2.448 Z M36.316,3.728 L38.588,3.728 L38.588,12 L36.316,12 L36.316,3.728 Z M40.38,3.728 L42.54,3.728 L42.54,5.264 L42.572,5.264 C42.6786672,5.00799872 42.8226658,4.77066776 43.004,4.552 C43.1853342,4.33333224 43.3933322,4.14666744 43.628,3.992 C43.8626678,3.83733256 44.113332,3.71733376 44.38,3.632 C44.646668,3.54666624 44.9239986,3.504 45.212,3.504 C45.3613341,3.504 45.5266658,3.5306664 45.708,3.584 L45.708,5.696 C45.6013328,5.67466656 45.4733341,5.65600008 45.324,5.64 C45.1746659,5.62399992 45.0306674,5.616 44.892,5.616 C44.4759979,5.616 44.1240014,5.68533264 43.836,5.824 C43.5479986,5.96266736 43.3160009,6.1519988 43.14,6.392 C42.9639991,6.6320012 42.838667,6.9119984 42.764,7.232 C42.689333,7.5520016 42.652,7.8986648 42.652,8.272 L42.652,12 L40.38,12 L40.38,3.728 Z M46.668,0.576 L48.94,0.576 L48.94,12 L46.668,12 L46.668,0.576 Z M53.068,2.448 L50.796,2.448 L50.796,0.576 L53.068,0.576 L53.068,2.448 Z M50.796,3.728 L53.068,3.728 L53.068,12 L50.796,12 L50.796,3.728 Z M54.86,3.728 L57.02,3.728 L57.02,4.88 L57.068,4.88 C57.3560014,4.3999976 57.729331,4.05066776 58.188,3.832 C58.646669,3.61333224 59.1159976,3.504 59.596,3.504 C60.204003,3.504 60.7026647,3.58666584 61.092,3.752 C61.4813353,3.91733416 61.7879989,4.1466652 62.012,4.44 C62.2360011,4.7333348 62.3933329,5.09066456 62.484,5.512 C62.5746671,5.93333544 62.62,6.39999744 62.62,6.912 L62.62,12 L60.348,12 L60.348,7.328 C60.348,6.64532992 60.2413344,6.13600168 60.028,5.8 C59.8146656,5.46399832 59.4360027,5.296 58.892,5.296 C58.2733302,5.296 57.8253347,5.47999816 57.548,5.848 C57.2706653,6.21600184 57.132,6.82132912 57.132,7.664 L57.132,12 L54.86,12 L54.86,3.728 Z M69.916,6.976 C69.8093328,6.39999712 69.6200014,5.96266816 69.348,5.664 C69.0759986,5.36533184 68.6626694,5.216 68.108,5.216 C67.7453315,5.216 67.4440012,5.27733272 67.204,5.4 C66.9639988,5.52266728 66.7720007,5.67466576 66.628,5.856 C66.4839993,6.03733424 66.382667,6.22933232 66.324,6.432 C66.265333,6.63466768 66.2306667,6.8159992 66.22,6.976 L69.916,6.976 Z M66.22,8.416 C66.2520002,9.15200368 66.438665,9.68533168 66.78,10.016 C67.121335,10.3466683 67.6119968,10.512 68.252,10.512 C68.710669,10.512 69.1053317,10.3973345 69.436,10.168 C69.7666683,9.93866552 69.969333,9.69600128 70.044,9.44 L72.044,9.44 C71.7239984,10.432005 71.2333366,11.1413312 70.572,11.568 C69.9106634,11.9946688 69.1106714,12.208 68.172,12.208 C67.5213301,12.208 66.9346693,12.104001 66.412,11.896 C65.8893307,11.687999 65.4466685,11.3920019 65.084,11.008 C64.7213315,10.6239981 64.4413343,10.165336 64.244,9.632 C64.0466657,9.098664 63.948,8.5120032 63.948,7.872 C63.948,7.25333024 64.0493323,6.677336 64.252,6.144 C64.4546677,5.610664 64.7426648,5.14933528 65.116,4.76 C65.4893352,4.37066472 65.9346641,4.06400112 66.452,3.84 C66.9693359,3.61599888 67.5426635,3.504 68.172,3.504 C68.8760035,3.504 69.4893307,3.63999864 70.012,3.912 C70.5346693,4.18400136 70.9639983,4.54933104 71.3,5.008 C71.6360017,5.46666896 71.8786659,5.9893304 72.028,6.576 C72.1773341,7.1626696 72.2306669,7.7759968 72.188,8.416 L66.22,8.416 Z M73.628,9.536 L76.14,9.536 L76.14,12 L73.628,12 L73.628,9.536 Z M83.612,6.64 C83.4626659,5.69066192 82.9026715,5.216 81.932,5.216 C81.5693315,5.216 81.2653346,5.29866584 81.02,5.464 C80.7746654,5.62933416 80.5746674,5.84266536 80.42,6.104 C80.2653326,6.36533464 80.1560003,6.65333176 80.092,6.968 C80.0279997,7.28266824 79.996,7.59466512 79.996,7.904 C79.996,8.20266816 80.0279997,8.50666512 80.092,8.816 C80.1560003,9.12533488 80.2599993,9.40533208 80.404,9.656 C80.5480007,9.90666792 80.7426654,10.1119992 80.988,10.272 C81.2333346,10.4320008 81.5319982,10.512 81.884,10.512 C82.4280027,10.512 82.8466652,10.3600015 83.14,10.056 C83.4333348,9.75199848 83.617333,9.34400256 83.692,8.832 L85.884,8.832 C85.7346659,9.93067216 85.3080035,10.7679971 84.604,11.344 C83.8999965,11.9200029 82.9986722,12.208 81.9,12.208 C81.2813302,12.208 80.7133359,12.104001 80.196,11.896 C79.6786641,11.687999 79.2386685,11.3973352 78.876,11.024 C78.5133315,10.6506648 78.2306677,10.2053359 78.028,9.688 C77.8253323,9.17066408 77.724,8.60266976 77.724,7.984 C77.724,7.3439968 77.8173324,6.74933608 78.004,6.2 C78.1906676,5.65066392 78.4653315,5.176002 78.828,4.776 C79.1906685,4.375998 79.6333307,4.06400112 80.156,3.84 C80.6786693,3.61599888 81.2759966,3.504 81.948,3.504 C82.4386691,3.504 82.9106644,3.56799936 83.364,3.696 C83.8173356,3.82400064 84.2226649,4.01866536 84.58,4.28 C84.9373351,4.54133464 85.2279989,4.86666472 85.452,5.256 C85.6760011,5.64533528 85.8039998,6.106664 85.836,6.64 L83.612,6.64 Z M89.18,7.872 C89.18,8.20266832 89.2119997,8.52533176 89.276,8.84 C89.3400003,9.15466824 89.4493326,9.43733208 89.604,9.688 C89.7586674,9.93866792 89.9639987,10.1386659 90.22,10.288 C90.4760013,10.4373341 90.7959981,10.512 91.18,10.512 C91.5640019,10.512 91.8866654,10.4373341 92.148,10.288 C92.4093346,10.1386659 92.6173326,9.93866792 92.772,9.688 C92.9266674,9.43733208 93.0359997,9.15466824 93.1,8.84 C93.1640003,8.52533176 93.196,8.20266832 93.196,7.872 C93.196,7.54133168 93.1640003,7.2160016 93.1,6.896 C93.0359997,6.5759984 92.9266674,6.29333456 92.772,6.048 C92.6173326,5.80266544 92.4093346,5.60266744 92.148,5.448 C91.8866654,5.29333256 91.5640019,5.216 91.18,5.216 C90.7959981,5.216 90.4760013,5.29333256 90.22,5.448 C89.9639987,5.60266744 89.7586674,5.80266544 89.604,6.048 C89.4493326,6.29333456 89.3400003,6.5759984 89.276,6.896 C89.2119997,7.2160016 89.18,7.54133168 89.18,7.872 Z M86.908,7.872 C86.908,7.21066336 87.0093323,6.61066936 87.212,6.072 C87.4146677,5.53333064 87.7026648,5.07466856 88.076,4.696 C88.4493352,4.31733144 88.8973307,4.02400104 89.42,3.816 C89.9426693,3.60799896 90.5293301,3.504 91.18,3.504 C91.8306699,3.504 92.4199974,3.60799896 92.948,3.816 C93.4760026,4.02400104 93.9266648,4.31733144 94.3,4.696 C94.6733352,5.07466856 94.9613323,5.53333064 95.164,6.072 C95.3666677,6.61066936 95.468,7.21066336 95.468,7.872 C95.468,8.53333664 95.3666677,9.130664 95.164,9.664 C94.9613323,10.197336 94.6733352,10.6533314 94.3,11.032 C93.9266648,11.4106686 93.4760026,11.7013323 92.948,11.904 C92.4199974,12.1066677 91.8306699,12.208 91.18,12.208 C90.5293301,12.208 89.9426693,12.1066677 89.42,11.904 C88.8973307,11.7013323 88.4493352,11.4106686 88.076,11.032 C87.7026648,10.6533314 87.4146677,10.197336 87.212,9.664 C87.0093323,9.130664 86.908,8.53333664 86.908,7.872 Z M97.004,3.728 L99.148,3.728 L99.148,4.848 L99.18,4.848 C99.4786682,4.4213312 99.8386646,4.09066784 100.26,3.856 C100.681335,3.62133216 101.163997,3.504 101.708,3.504 C102.230669,3.504 102.707998,3.60533232 103.14,3.808 C103.572002,4.01066768 103.899999,4.36799744 104.124,4.88 C104.369335,4.51733152 104.702665,4.19733472 105.124,3.92 C105.545335,3.64266528 106.043997,3.504 106.62,3.504 C107.057336,3.504 107.462665,3.5573328 107.836,3.664 C108.209335,3.7706672 108.529332,3.94133216 108.796,4.176 C109.062668,4.41066784 109.270666,4.71733144 109.42,5.096 C109.569334,5.47466856 109.644,5.930664 109.644,6.464 L109.644,12 L107.372,12 L107.372,7.312 C107.372,7.03466528 107.361333,6.77333456 107.34,6.528 C107.318667,6.28266544 107.26,6.06933424 107.164,5.888 C107.068,5.70666576 106.926668,5.5626672 106.74,5.456 C106.553332,5.3493328 106.300002,5.296 105.98,5.296 C105.659998,5.296 105.401334,5.35733272 105.204,5.48 C105.006666,5.60266728 104.852001,5.76266568 104.74,5.96 C104.627999,6.15733432 104.553334,6.38133208 104.516,6.632 C104.478666,6.88266792 104.46,7.13599872 104.46,7.392 L104.46,12 L102.188,12 L102.188,7.36 C102.188,7.11466544 102.182667,6.8720012 102.172,6.632 C102.161333,6.3919988 102.116,6.17066768 102.036,5.968 C101.956,5.76533232 101.822668,5.60266728 101.636,5.48 C101.449332,5.35733272 101.174668,5.296 100.812,5.296 C100.705333,5.296 100.564001,5.31999976 100.388,5.368 C100.211999,5.41600024 100.041334,5.506666 99.876,5.64 C99.7106658,5.773334 99.5693339,5.96533208 99.452,6.216 C99.3346661,6.46666792 99.276,6.79466464 99.276,7.2 L99.276,12 L97.004,12 L97.004,3.728 Z M6.5,11.6 L16.9,1.1 C17.2,0.8 17.6,0.6 18.1,0.6 L19.3,0.6 C19.8,0.6 20.1,1.1 19.9,1.6 L16.1,11.6 L6.5,11.6 Z M12,3.4 L10.7,6.3 L5.5,11.6 L7.10542736e-15,11.6 L9.2,3 C9.5,2.7 9.9,2.6 10.3,2.6 L11.4,2.6 C11.9,2.6 12.2,3 12,3.4 Z" />
    </svg>
  </span>
);

export default AirlineLogo;
