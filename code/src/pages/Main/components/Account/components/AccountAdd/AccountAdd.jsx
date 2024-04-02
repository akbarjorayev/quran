import Button from '../../../../../../components/Button/Button'

export default function AccountAdd() {
  return (
    <div className="df_f_ce">
      <Button
        className="df_f_ce list_x w_max medium"
        colorful="true"
        onClick={() => (window.location.href = 'account/login')}
      >
        <span className="material-symbols-outlined fz_normal">add_circle</span>
        <span>Add account</span>
      </Button>
    </div>
  )
}
