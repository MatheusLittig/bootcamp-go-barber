import { uuid } from 'uuidv4'
import { isEqual } from 'date-fns'

import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentsRepository'

import Appointment from '../../infra/typeorm/entities/Appointment'
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO'

class FakeAppointmentsRepository implements IAppointmentRepository {
  private appointments: Appointment[] = []

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(appointment.date, date)
    )

    return findAppointment
  }

  public async create({
    date,
    provider_id
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = new Appointment()

    Object.assign(appointment, { id: uuid(), date, provider_id })

    this.appointments.push(appointment)

    return appointment
  }
}

export default FakeAppointmentsRepository
