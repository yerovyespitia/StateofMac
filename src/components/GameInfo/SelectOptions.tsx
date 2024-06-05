export const SelectOptions = ({ onChange, title, options }: any) => {
  return (
    <select
      onChange={onChange}
      className='m-0 mb-3 h-14 w-full rounded-lg bg-[#292929] text-center text-lg font-medium text-white focus:outline-0'
    >
      <option disabled selected={true} defaultValue={title}>
        {title}
      </option>

      {options.map((option: any, i: any) => (
        <option value={option} key={i}>
          {option}
        </option>
      ))}
    </select>
  )
}
