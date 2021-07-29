import { EntityRepository, Repository } from 'typeorm';

import Appoitment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

@EntityRepository(Appoitment)
class AppointmentsRepository
  extends Repository<Appoitment>
  implements IAppointmentsRepository {
  public async findByDate(date: Date): Promise<Appoitment | undefined> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment;
  }
}

export default AppointmentsRepository;
