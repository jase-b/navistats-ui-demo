import { useSelector } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import { useFormContext } from "react-hook-form";
import { numbers } from 'utils';
import * as sc from '../../SearchPanel.styles';

const rangeInputProps = {
    // sx: { maxWidth: '160px' },
    thousandSeparator: ','
};

const TOTAL_SALES_MAX = numbers.toNumber('1,000,000,000');
const TRANSACTIONS_MAX = numbers.toNumber('1,000,000');

const TransactionFilters = () => {
        const { searchFilters } = useSelector(state => state.agentMap);

        const { register } = useFormContext();

        return (
            <sc.PanelSection>
                <sc.PanelSectionHeading>Transaction</sc.PanelSectionHeading>
                <sc.SearchFilterLabel
                    control={(() => {
                        const {
                            ref: totalSalesMinInputRef,
                            ...totalSalesMinInputProps
                        } = register('totalSalesMin', {
                            max: 1000000000000
                        });

                        const {
                            ref: totalSalesMaxInputRef,
                            ...totalSalesMaxInputProps
                        } = register('totalSalesMax');

                        return (
                            <sc.RangeInputContainer>
                                <NumericFormat
                                    {...rangeInputProps}
                                    {...totalSalesMinInputProps}
                                    customInput={sc.SearchFilterTextField}
                                    getInputRef={totalSalesMinInputRef}
                                    isAllowed={v => !(v.floatValue >= (TOTAL_SALES_MAX - 1))}
                                    placeholder='Min'
                                    startAdornment={
                                        <sc.DollarSign>$</sc.DollarSign>
                                    }
                                    value={searchFilters.totalSalesMin || ''} 
                                />
                                <sc.InputSpacer />     
                                <NumericFormat
                                    {...rangeInputProps}
                                    {...totalSalesMaxInputProps}
                                    customInput={sc.SearchFilterTextField}
                                    getInputRef={totalSalesMaxInputRef}
                                    isAllowed={v => !(v.floatValue >= TOTAL_SALES_MAX)}
                                    placeholder='Max'
                                    startAdornment={
                                        <sc.DollarSign>$</sc.DollarSign>
                                    }
                                    value={searchFilters.totalSalesMax}                             
                                />                                                
                            </sc.RangeInputContainer>
                        );
                    })()}
                    label='Total Sales'
                    labelPlacement='top'
                />
                <sc.SearchFilterLabel
                    control={(() => {
                        const {
                            ref: transactionsMinInputRef,
                            ...transactionsMinInputProps
                        } = register('transactionsMin');

                        const {
                            ref: transactionsMaxInputRef,
                            ...transactionsMaxInputProps
                        } = register('transactionsMax', {
                            maxLength: 7
                        });

                        return (
                            <sc.RangeInputContainer>
                                <NumericFormat
                                    {...rangeInputProps}
                                    {...transactionsMinInputProps}
                                    customInput={sc.SearchFilterTextField}
                                    getInputRef={transactionsMinInputRef}
                                    isAllowed={v => !(v.floatValue >= (TRANSACTIONS_MAX - 1))}
                                    placeholder='Min'
                                    value={searchFilters.transactionsMin || ''}                              
                                />  
                                <sc.InputSpacer />
                                <NumericFormat
                                    {...rangeInputProps}
                                    {...transactionsMaxInputProps}
                                    customInput={sc.SearchFilterTextField}
                                    getInputRef={transactionsMaxInputRef}
                                    isAllowed={v => !(v.floatValue >= TRANSACTIONS_MAX)}
                                    placeholder='Max'
                                    value={searchFilters.transactionsMax}                               
                                />                                                                 
                            </sc.RangeInputContainer>
                        );
                    })()}
                    label='Transactions'
                    labelPlacement='top'
                />
            </sc.PanelSection>
        );
};

export default TransactionFilters;