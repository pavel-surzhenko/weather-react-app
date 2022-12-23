// Core
import { makeAutoObservable } from 'mobx';
import { computedFn } from 'mobx-utils';

export class WeatherStore {
    type = '';
    minTemperature = '';
    maxTemperature = '';
    isFiltered = false;
    selectedDayId = '';

    constructor() {
        this
            .filteredDays = computedFn((days) => {
                const filteredDays = days.filter((day) => {
                    const isCorrectType = this.type
                        ? this.type === day.type
                        : true;
                    const isCorrectMinTemperature = this.minTemperature
                        ? this.minTemperature <= String(day.temperature)
                        : true;
                    const isCorrectMaxTemperature = this.maxTemperature
                        ? this.maxTemperature >= String(day.temperature)
                        : true;

                    return (
                        isCorrectType
                    && isCorrectMinTemperature
                    && isCorrectMaxTemperature
                    );
                });

                return filteredDays;
            });

        makeAutoObservable(this);
    }

    setType(type) {
        this.type = type;
    }

    setMinTemperature(temp) {
        this.minTemperature = temp;
    }

    setMaxTemperature(temp) {
        this.maxTemperature = temp;
    }

    applyFilter(filter) {
        if (filter.type) {
            this.type = filter.type;
        }

        if (filter.minTemperature) {
            this.minTemperature = filter.minTemperature;
        }

        if (filter.maxTemperature) {
            this.maxTemperature = filter.maxTemperature;
        }

        this.isFiltered = true;
    }

    get isFormBlocked() {
        return this.type === '' && this.minTemperature === '' && this.maxTemperature === '';
    }

    setSelectedDayId(id) {
        this.selectedDayId = id;
    }

    resetFilter() {
        this.maxTemperature = '';
        this.minTemperature = '';
        this.type = '';
        this.isFiltered = false;
    }
}

export const store = new WeatherStore();
