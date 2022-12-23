export const Forecast = () => {
    return (
        <div className="forecast">
            <div className="day cloudy selected">
                <p>Пятница</p>
                <span>17</span>
            </div>
            <div className="day cloudy">
                <p>Суббота</p>
                <span>19</span>
            </div>
            <div className="day cloudy">
                <p>Понедельник</p>
                <span>18</span>
            </div>
            <div className="day cloudy">
                <p>Вторник</p>
                <span>21</span>
            </div>
            <div className="day rainy">
                <p>Среда</p>
                <span>16</span>
            </div>
            <div className="day rainy">
                <p>Четверг</p>
                <span>19</span>
            </div>
            <div className="day sunny">
                <p>Пятница</p>
                <span>26</span>
            </div>
        </div>
    );
};
