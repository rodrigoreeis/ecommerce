import React from "react"
import InputSelect from "../../components/InputSelect/InputSelect"

const optionsList = [
  {
    id: 1,
    key: "Option 1",
    value: "option1",
  },
  {
    id: 2,
    key: "Option 2",
    value: "option2",
  },
  {
    id: 3,
    key: "Option 3",
    value: "option3",
  },
]

const TestComponents = () => {
  return (
    <form>
      <InputSelect
        disabled={false}
        label="Choose One: "
        optionsList={optionsList}
        required
        value={optionsList[1].value}
      />
    </form>
  )
}

export default TestComponents
