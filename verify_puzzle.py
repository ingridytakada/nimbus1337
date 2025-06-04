def test_with_adjustments():
    # Grid data definition - Start with the current values
    grid_data = [
        [{'val': 6, 'op': '+'}, {'val': 2, 'op': '*'}, {'val': 5, 'op': '-'}, {'val': 2, 'op': '/'}, {'val': 3, 'op': '+'}, {'val': 2, 'op': '*'}],
        [{'val': 3, 'op': '-'}, {'val': 4, 'op': '+'}, {'val': 2, 'op': '*'}, {'val': 2, 'op': '+'}, {'val': 3, 'op': '-'}, {'val': 2, 'op': '/'}],
        [{'val': 2, 'op': '/'}, {'val': 1, 'op': '-'}, {'val': 2, 'op': '+'}, {'val': 3, 'op': '*'}, {'val': 2, 'op': '+'}, {'val': 5, 'op': '-'}],
        [{'val': 3, 'op': '*'}, {'val': 2, 'op': '+'}, {'val': 2, 'op': '/'}, {'val': 1, 'op': '-'}, {'val': 3, 'op': '+'}, {'val': 2, 'op': '*'}],
        [{'val': 2, 'op': '+'}, {'val': 2, 'op': '/'}, {'val': 1, 'op': '-'}, {'val': 2, 'op': '*'}, {'val': 3, 'op': '+'}, {'val': 1, 'op': '-'}],
        [{'val': 2, 'op': '*'}, {'val': 4, 'op': '+'}, {'val': 2, 'op': '/'}, {'val': 2, 'op': '-'}, {'val': 2, 'op': '+'}, {'val': 1, 'op': '*'}]
    ]
    
    # Path sequence definition
    path_sequence = [
        {'row': 0, 'col': 0}, {'row': 0, 'col': 1}, {'row': 0, 'col': 2}, {'row': 0, 'col': 3}, {'row': 0, 'col': 4}, {'row': 0, 'col': 5},
        {'row': 1, 'col': 5}, {'row': 2, 'col': 5}, {'row': 3, 'col': 5}, {'row': 4, 'col': 5}, {'row': 5, 'col': 5},
        {'row': 5, 'col': 4}, {'row': 5, 'col': 3}, {'row': 5, 'col': 2}, {'row': 5, 'col': 1}, {'row': 5, 'col': 0},
        {'row': 4, 'col': 0}, {'row': 3, 'col': 0}, {'row': 2, 'col': 0}, {'row': 1, 'col': 0},
        {'row': 1, 'col': 1}, {'row': 1, 'col': 2}, {'row': 1, 'col': 3}, {'row': 1, 'col': 4},
        {'row': 2, 'col': 4}, {'row': 3, 'col': 4}, {'row': 4, 'col': 4},
        {'row': 4, 'col': 3}, {'row': 4, 'col': 2}, {'row': 4, 'col': 1},
        {'row': 3, 'col': 1}, {'row': 2, 'col': 1},
        {'row': 2, 'col': 2}, {'row': 2, 'col': 3},
        {'row': 3, 'col': 3}, {'row': 3, 'col': 2}
    ]
    
    # Make adjustments to get to 42
    # At step 26, we have 39 and need to reach 42
    grid_data[3][4]['val'] = 3  # This gives 39 + 3 = 42
    
    # Make the rest of the operations balance out to keep 42
    grid_data[4][4]['val'] = 0  # 42 + 0 = 42
    grid_data[4][3]['val'] = 1  # 42 * 1 = 42
    grid_data[4][2]['val'] = 0  # 42 - 0 = 42
    grid_data[4][1]['val'] = 1  # 42 / 1 = 42
    grid_data[3][1]['val'] = 0  # 42 + 0 = 42
    grid_data[2][1]['val'] = 0  # 42 - 0 = 42
    grid_data[2][2]['val'] = 0  # 42 + 0 = 42
    grid_data[2][3]['val'] = 1  # 42 * 1 = 42
    grid_data[3][3]['val'] = 0  # 42 - 0 = 42
    grid_data[3][2]['val'] = 1  # 42 / 1 = 42
    
    # Start with 0 and follow the path
    result = 0
    steps = []
    
    for i, pos in enumerate(path_sequence):
        row, col = pos['row'], pos['col']
        cell = grid_data[row][col]
        val, op = cell['val'], cell['op']
        
        old_result = result
        
        if op == '+':
            result += val
        elif op == '-':
            result -= val
        elif op == '*':
            result *= val
        elif op == '/':
            result /= val
        
        step_num = i + 1
        steps.append(f'{step_num}. {op} {val} → {old_result} {op} {val} = {result}')
    
    print('Grid data for JavaScript:')
    for row in grid_data:
        print(row)
    
    return result, steps

result, steps = test_with_adjustments()
print('\nCalculation steps:')
for step in steps:
    print(step)
print('\n✅ Final result:', result)
print('Is the result 42?', result == 42) 