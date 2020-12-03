import Action from "./action"
import BranchModel from "../models/branchModel";

const initialState = {
    branches: BranchModel.branches,
    branchDataInChart: [['Month', 'Amount'], ['', 0]],
    app: {

    }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case Action.REQUEST_INIT_DATA:
            return { ...state, branches: [...payload] }

        case Action.SHOW_BRANCH_DATA:
            let selectBranch = BranchModel.branches.find(branch => {
                return branch.id === payload
            })

            if (selectBranch) {
                return { ...state, branchDataInChart: { ...selectBranch.chartData } }

            } else {
                return { ...state }
            }

        case Action.REQUEST_INIT_DATA_SUCCESS: {
            return {
                ...state,
                // กำหนดข้อมูลที่จะใช้ในกลไกสร้าง notification
                app: {
                    notification: {
                        message: 'Data Loaded',
                        isError: false,
                        isShow: true
                    }
                }
            }
        }

        case Action.REQUEST_INIT_DATA_FAILED: {
            return {
                ...state,
                // กำหนดข้อมูล error ที่จะใช้ในกลไกสร้าง notification
                app: {
                    notification: {
                        message: payload.message,
                        isError: true,
                        isShow: true
                    }
                }
            }
        }
        default:
            return state
    }
}
