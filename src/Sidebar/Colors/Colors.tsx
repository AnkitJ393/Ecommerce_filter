import './Colors.css'

const Colors = () => {
  return (
    <div>
        <div>
        <label className='sidebar-label-container color-title'>
          <input type="radio" name='text' />
          <span className="checkmark"></span>All
        </label>
        <label className='sidebar-label-container'>
          <input type="radio" name='text' />
          <span className="checkmark"></span>BLACK
        </label>
        <label className='sidebar-label-container'>
          <input type="radio" name='text' />
          <span className="checkmark"></span>GREEN
        </label>
        <label className='sidebar-label-container'>
          <input type="radio" name='text' />
          <span className="checkmark"></span>WHITE
        </label>
        <label className='sidebar-label-container'>
          <input type="radio" name='text' />
          <span className="checkmark"></span>RED
        </label>
        <label className='sidebar-label-container'>
          <input type="radio" name='text' />
          <span className="checkmark"></span>BLUE
        </label>
      </div>
    </div>
  )
}

export default Colors;