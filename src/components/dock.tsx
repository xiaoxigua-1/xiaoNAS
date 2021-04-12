import React from 'react';
import "../sass/Dock.sass";
import setting from "../icons/PNGS/control-center.png";
import folder from "../icons/PNGS/folder.png";
import Setting from "./App/setting";
interface Dock {
    windowsAdd: Function
}

export default class Loading extends React.Component<{windowsAdd: Function}> {

    private appList: Array<any>;

    constructor(props: Dock) {
        super(props);
        this.appList = [
            { icon: setting, appName: "dsa", height: "50px", app: <Setting /> },
            { icon: folder, appName: "sad", height: "50px", app: "w" },
            { icon: setting, appName: "sad", height: "50px", app: "d" },
            { icon: setting, appName: "sdsad", height: "50px", app: "c" }
        ]
    }

    render() {
        return (
            <div id="Dock">
                <div className="apps">
                    {
                        this.appList.map((v, index) => {
                            return (
                                <div className="app"
                                    style={{ height: v.height }}
                                    onMouseOver={
                                        () => {
                                            this.iconHeight(index);
                                        }
                                    }
                                    onMouseOut={
                                        () => {
                                            this.iconHeightInit(index);
                                        }
                                    }
                                    onClick={
                                        () => {
                                            this.props.windowsAdd("WTF", v.icon, v.app)
                                        }
                                    }
                                >
                                    <img title={v.appName} src={v.icon} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    iconHeight(index: number) {
        if (index !== 0) {
            this.appList[index - 1].height = "65px";
        }
        if (index !== this.appList.length - 1) {
            this.appList[index + 1].height = "65px";
        }
        this.appList[index].height = "80px";
        this.setState({ appList: this.appList });
        console.log(this.appList);
    }

    iconHeightInit(index: number) {
        if (index !== 0) {
            this.appList[index - 1].height = "50px";
        }
        if (index !== this.appList.length - 1) {
            this.appList[index + 1].height = "50px";
        }
        this.appList[index].height = "50px";
        this.setState({ appList: this.appList });
    }
}