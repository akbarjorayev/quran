import shape from './numShape.svg'

import './SurahsList.css'

export default function SurahsList({ surahs }) {
  return (
    <>
      <div className=" list_y">
        {surahs?.map((surah, i) => {
          return (
            <div className="list_y" key={i}>
              <div className="con_ha surah df_ai_ce_child df_jc_sb">
                <div className="list_x">
                  <div className="number df_f_ce">
                    <img src={shape} alt="shape" />
                    <div className="num">{surah.number}</div>
                  </div>
                  <div className="line_y"></div>
                  <div className="list_y">
                    <b className="w_100">{surah.englishName}</b>
                    <div className="list_x_small w_100 txt_opa fz_small">
                      <div>{surah.revelationType}</div>
                      <div>•</div>
                      <div>{surah.numberOfAyahs} verses</div>
                    </div>
                  </div>
                </div>
                <b className="txt_gradient">{surah.name}</b>
              </div>
              {surahs.length - 1 !== i && <div className="line_x_small"></div>}
            </div>
          )
        })}
      </div>
    </>
  )
}
