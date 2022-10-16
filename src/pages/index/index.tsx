import {useState} from 'react';
import { View, Button, Label, Input, Icon } from '@tarojs/components'
import { useList } from './useList';
import './index.less';

function Index () {
  const [expenseList, setExpense] = useState<Array<{value: string}>>([{value: ''}]);
  const {list: incomeList, addNew: addIncome, removeByIndex, editListItem} = useList<{value: string}>();

  const addExpense = () => {
    const newExpenseList = [...expenseList, {value: ''}];
    setExpense(newExpenseList);
  }

  return (
    <View className="container">
      <View>
        <View className="title income-title">收入</View>
        {
          incomeList.map((item, index) => 
            <View className="row">
              <Label>{`收入项${index+1}`}：</Label>
              <Input name='salary' type="number" placeholder='请输入收入' focus/>
              <Icon type="clear" size="20" color="red" onClick={() => removeByIndex(index)}/>
            </View>
          )
        }
        <Button className="add-btn" onClick={addIncome}>添加收入项</Button>
      </View>
      <View className="expense-section">
        <View className="title expense-title">支出</View>
        {
          expenseList.map((item, index) =>
            <View className="row">
              <Label>{`支出项${index+1}`}：</Label>
              <Input name='salary' type="number" placeholder='请输入支出' focus/>
            </View>
          )
        }
        <Button className="add-btn" onClick={addExpense}>添加支出项</Button>
      </View>
    </View>
  )
}

export default Index;