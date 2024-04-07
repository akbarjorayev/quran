import './AyahsList.css'

export default function AyahsList({ arAyahs, engAyahs }) {
  return (
    <>
      <div className="list_y_big">
        {arAyahs?.map((arAyah, i) => {
          return (
            <div className="list_y ayahs_list" key={i}>
              <div className="con_bg_df list_x df_ai_ce df_jc_sb ayahs_top">
                <div className="number">{arAyah.numberInSurah}</div>
                <div className="list_x_small">
                  <div className="con_bg_df con_ha">
                    <span className="material-symbols-outlined fz_big">
                      play_circle
                    </span>
                  </div>
                </div>
              </div>
              <div className="list_y">
                <div className="txt_ar fz_big">{arAyah.text}</div>
                <div>{engAyahs[i].text}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
